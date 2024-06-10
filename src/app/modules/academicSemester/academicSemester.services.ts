import { academicSemesterNameCodeMapper } from "./academicSemester.constants";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (
  academicSemesterData: TAcademicSemester,
) => {
  if (
    academicSemesterData.code !==
    academicSemesterNameCodeMapper[academicSemesterData.name]
  ) {
    throw new Error(
      `${academicSemesterData.name} code is not ${academicSemesterNameCodeMapper[academicSemesterData.name]}`,
    );
  }
  const result = await AcademicSemesterModel.create(academicSemesterData);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
