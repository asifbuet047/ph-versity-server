import StudentModel from "./student.models";

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.find({ id: studentId });
  return result;
};

export const StudentServices = {
  getSingleStudentFromDB,
};
