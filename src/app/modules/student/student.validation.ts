import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .trim()
    .refine(value => /^[A-Z]/.test(value), {
      message: "First Name must start with a capital letter",
    }),
  middleName: z
    .string()
    .min(1)
    .max(20)
    .trim()
    .refine(value => /^[A-Z]/.test(value), {
      message: "Middle Name must start with a capital letter",
    }),
  lastName: z
    .string()
    .min(1)
    .max(20)
    .trim()
    .refine(value => /^[A-Z]/.test(value), {
      message: "Last Name must start with a capital letter",
    }),
});

const guardianValidationSchema = z.object({
  fatherName: z
    .string()
    .min(1)
    .max(20)
    .trim()
    .refine(value => /^[A-Z]/.test(value), {
      message: "Father's name must start with a capital letter",
    }),
  fatherOccupation: z.string().trim().min(4).max(30),
  fatherContactNo: z.string().trim(),
  motherName: z
    .string()
    .min(1)
    .max(20)
    .trim()
    .refine(value => /^[A-Z]/.test(value), {
      message: "Mother's name must start with a capital letter",
    }),
  motherOccupation: z.string().trim().min(4).max(30),
  motherContactNo: z.string().trim(),
});

const localGuardianValidationSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(20)
    .trim()
    .refine(value => /^[A-Z]/.test(value), {
      message: "Local guardian's name must start with a capital letter",
    }),
  occupation: z.string().trim().min(4).max(30),
  contactNo: z.string().trim(),
  address: z.string(),
});

export const createStudentValidationSchema = z.object({
  password: z.string().max(20),
  student: z.object({
    name: userNameValidationSchema,
    academicSemester: z.string().trim(),
    gender: z.enum(["male", "female", "other"]),
    dateOfBirth: z.string().optional(),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: z.string(),
  }),
});
