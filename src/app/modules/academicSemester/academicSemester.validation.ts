import z from "zod";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academicSemester.constants";

export const academicSemesterValidationSchema = z.object({
  name: z.enum([...AcademicSemesterName] as [string, ...string[]], {
    message: "Proper name required",
  }),
  code: z.enum([...AcademicSemesterCode] as [string, ...string[]], {
    message: "Proper semester code required",
  }),
  year: z.string(),
  startMonth: z.enum([...Months] as [string, ...string[]], {
    message: "Should be  valid month name",
  }),
  endMonth: z.enum([...Months] as [string, ...string[]], {
    message: "Should be  valid month name",
  }),
});
