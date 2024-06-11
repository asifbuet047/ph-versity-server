import { z } from "zod";

const createUsersValidationSchema = z.object({
  id: z.string().optional(),
  password: z
    .string()
    .max(20, { message: "Password cant be more than 20" })
    .optional(),
});

export const UsersValidationSchema = {
  createUsersValidationSchema,
};
