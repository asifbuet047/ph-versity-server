import StudentModel from "./student.models";

const findSingleStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.findById(studentId).populate('user').populate('academicSemester');
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
