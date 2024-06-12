import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
  name: z.string({ message: "Must be string" }),
});


export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
};
