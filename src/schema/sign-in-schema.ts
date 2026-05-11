import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email syntax provided" }),
  otp: z.string().max(6).optional().or(z.literal("")),
});
