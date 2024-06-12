import { z } from "zod";

const createAcademicdepartmentValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Must be string",
    required_error: "Department is required",
  }),
  faculty: z.string({
    invalid_type_error: "Must be string",
    required_error: "Faculty of Department is required",
  }),
});

const updateAcademicdepartmentValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Must be string",
      required_error: "Department is required",
    })
    .optional(),
  faculty: z
    .string({
      invalid_type_error: "Must be string",
      required_error: "Faculty of Department is required",
    })
    .optional(),
});

export const AcademicDepartmentValidationSchema = {
  createAcademicdepartmentValidationSchema,
  updateAcademicdepartmentValidationSchema,
};
