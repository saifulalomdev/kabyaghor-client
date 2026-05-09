import { z } from 'zod';

export const signUpShcema = z.object({
    name: z.string().min(10).max(16),
    email: z.email(),
})