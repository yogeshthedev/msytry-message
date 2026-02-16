import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be atleast 3 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const emailSchema = z
  .string()
  .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
    message: "Invalid email address",
  });
  // we use refine instead of email due to it is deprecated

export const signUpSchema = z.object({
  username: usernameValidation,
  email: emailSchema,
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 characters" }),
});
