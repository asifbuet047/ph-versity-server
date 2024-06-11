import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";

const createAcademicFacultyIntoDB = async (faculty: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(faculty);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};

const updateSingleAcademicFacultyIntoDB = async (
  id: string,
  faculty: TAcademicFaculty,
) => {
  const result = await AcademicFacultyModel.findOneAndUpdate(
    { _id: id },
    faculty,
    { new: true },
  );
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateSingleAcademicFacultyIntoDB,
};
