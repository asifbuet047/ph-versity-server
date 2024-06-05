import { TStudent } from "./student.interface";
import StudentModel from "./student.models";

const addStudentIntoDB = async (student: TStudent) => {
  console.log(student);
  const result = await StudentModel.create(student);
  return result;
};

const getSingleStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.find({ id: studentId });
  return result;
};

export const StudentServices = {
  addStudentIntoDB,
  getSingleStudentFromDB,
};
