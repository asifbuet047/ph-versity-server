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

const findAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const findSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};
const updateSingleAcademicSemesterIntoDB = async (
  id: string,
  updatedSemester: Partial<TAcademicSemester>,
) => {
  console.log(updatedSemester);
  if (
    academicSemesterNameCodeMapper[updatedSemester.name as string] ==
    updatedSemester.code
  ) {
    const result = await AcademicSemesterModel.findOneAndUpdate(
      { _id: id },
      updatedSemester,
      { new: true },
    );
    return result;
  } else {
    throw new Error("Invalid semester code");
  }
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  findAllAcademicSemesterFromDB,
  findSingleAcademicSemesterFromDB,
  updateSingleAcademicSemesterIntoDB,
};
