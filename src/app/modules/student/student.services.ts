import StudentModel from "./student.models";

const findSingleStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.findById(studentId);
  return result;
};

const findAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

export const StudentServices = {
  findSingleStudentFromDB,
  findAllStudentFromDB,
};
