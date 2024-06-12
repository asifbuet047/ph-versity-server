import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepertmentModel } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (
  department: TAcademicDepartment,
) => {
  const result = await AcademicDepertmentModel.create(department);
  return result;
};

const findAllAcademicDepartmentFromDB = async () => {
  const result = await AcademicDepertmentModel.find();
  return result;
};

const findSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepertmentModel.findById(id);
  return result;
};

const updateSingleAcademicDepartmentIntoDB = async (
  id: string,
  department: TAcademicDepartment,
) => {
  const result = await AcademicDepertmentModel.findOneAndUpdate(
    { _id: id },
    department,
    { new: true },
  );
  return result;
};

export const AcademciDepartmentServices = {
  createAcademicDepartmentIntoDB,
  findAllAcademicDepartmentFromDB,
  findSingleAcademicDepartmentFromDB,
  updateSingleAcademicDepartmentIntoDB,
};
