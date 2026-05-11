import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate } from "react-router";
import { authClient } from "../lib/auth-client";
import { toast } from "sonner";
import { signInSchema } from "../schema/sign-in-schema";
import Input from "../ui/input";
import Button from "../ui/button";

type FormData = {
  email: string;
  otp?: string; // Appended for validation step
};

export default function LogInPage() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"request" | "verify">("request");
  const { data: session, isPending } = authClient.useSession();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", otp: "" }
  });

  // Watch the current email address to persist UI indicators
  const watchedEmail = watch("email");

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-text">
        <p className="text-sm font-medium">Verifying session context...</p>
      </div>
    );
  }

  if (session) {
    return <Navigate to="/" replace />;
  }

  // Unified onSubmit interceptor split by active phase state
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      if (step === "request") {
        // Phase 1: Request code generation via plugin actions
        const res = await authClient.emailOtp.sendVerificationOtp({
          email: data.email,
          type: "sign-in",
        });

        if (res.error) throw new Error(res.error.message);

        toast.success("Verification code dispatched to your inbox");
        setStep("verify");
      } else {
        // Phase 2: Validate code input to generate secure session cookies
        if (!data.otp) {
          toast.error("Please provide the 6-digit authentication code");
          return;
        }

        const res = await authClient.signIn.emailOtp({
          email: data.email,
          otp: data.otp,
        });

        if (res.error) throw new Error(res.error.message);

        toast.success("Access granted! Authenticating session...");
      }
    } catch (err: any) {
      toast.error(err.message || "An expected authentication failure occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center px-5">
      <div className="w-full max-w-sm flex flex-col gap-6 text-center">
        <div>
          <h1 className="text-2xl font-semibold">
            {step === "request" ? "Welcome back" : "Confirm identity"}
          </h1>
          <p className="text-sm text-muted mt-2">
            {step === "request" 
              ? "Continue your reading journey" 
              : `Code sent to ${watchedEmail}`}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {step === "request" ? (
            /* PHASE 1 UI: EMAIL SUBMISSION */
            <div>
              <Input 
                type="email" 
                placeholder="Email address" 
                {...register("email")} 
              />
              {errors.email && (
                <p className="text-sm text-red-500 px-2 text-left mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          ) : (
            /* PHASE 2 UI: OTP CODE CORRELATION */
            <div>
              <Input 
                type="text" 
                placeholder="6-Digit OTP Code" 
                maxLength={6}
                autoFocus

                className="text-center font-mono tracking-widest text-lg"
                {...register("otp")} 
              />
              {errors.otp && (
                <p className="text-sm text-red-500 px-2 text-left mt-1">
                  {errors.otp.message}
                </p>
              )}
            </div>
          )}

          <Button type="submit" disabled={loading}>
            {loading 
              ? "Processing..." 
              : step === "request" ? "Continue with Email" : "Verify & Sign In"}
          </Button>

          {step === "verify" && (
            <button
              type="button"
              className="text-xs text-muted hover:underline mt-1"
              onClick={() => setStep("request")}
              disabled={loading}
            >
              Change email address
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
