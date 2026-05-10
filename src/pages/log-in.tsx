import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate } from "react-router";
import { authClient, getAuthCallbackURL } from "../lib/auth-client";
import { toast } from "sonner";
import { signInSchema } from "../schema/sign-in-schema";

type FormData = {
  email: string;
};

export default function LogInPage() {
  const [loading, setLoading] = useState(false);
  const fromPath = ((location as any).state as { from?: { pathname: string } })?.from?.pathname || "/";
  // 1. Monitor live session state to intercept logged-in users
  const { data: session, isPending } = authClient.useSession();

  // 2. React Hook Form instantiation with Zod schema verification
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  // 3. Fallback loader to prevent UI flashing during network validation
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-text">
        <p className="text-sm font-medium">Verifying session context...</p>
      </div>
    );
  }

  // 4. Force immediate escape redirection out of login if token is active
  if (session) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (data: any) => {
    try {
      await authClient.signIn.magicLink({
        email: data.email,
        callbackURL: getAuthCallbackURL(fromPath), // 👈 Dynamic destination injection
      });
      toast.success("Check your email for the login link");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      toast.success("Redirecting to Google...");
    } catch {
      toast.error("Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center px-5">
      <div className="w-full max-w-sm flex flex-col gap-6 text-center">

        {/* Title */}
        <div>
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted mt-2">
            Continue your reading journey
          </p>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-primary text-black font-medium"
        >
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 text-muted text-xs">
          <div className="flex-1 h-px bg-border" />
          or
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Email address"
            {...register("email")}
            className="
              w-full
              px-4 py-3
              rounded-xl
              bg-surface
              border border-border
              outline-none
              text-sm
            "
          />

          {/* INLINE ERROR */}
          {errors.email && (
            <p className="text-xs text-red-500 text-left px-1">
              {errors.email.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-surface border border-border text-sm font-medium mt-1"
          >
            {loading ? "Sending..." : "Continue with Email"}
          </button>
        </form>

      </div>
    </div>
  );
}
