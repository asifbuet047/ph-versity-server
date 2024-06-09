
import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from "./academicSemester.constants";

export type TAcademicSemester = {
  name: TAcademicSemesterName;
  year: string;
  code: TAcademicSemesterCode;
  startMonth: TMonths;
  endMonth: TMonths;
};
