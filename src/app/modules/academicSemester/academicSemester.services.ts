import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (
  academicSemesterData: TAcademicSemester,
) => {
  const result = await AcademicSemesterModel.create(academicSemesterData);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
