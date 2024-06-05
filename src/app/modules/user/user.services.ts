import config from "../../config/index";
import { TStudent } from "../student/student.interface";
import StudentModel from "../student/student.models";
import { TUser } from "./user.interface";
import { UserModel } from "./user.models";

const addStudentIntoDB = async (password: string, studentInfo: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);
  userData.role = "student";
  userData.id = "202410117301";

  const newUser = await UserModel.create(userData); // create a User document in that collection

  if (Object.keys(newUser).length) {
    studentInfo.id = newUser.id;
    studentInfo.user = newUser._id;

    const newStudent = await StudentModel.create(studentInfo); // create a Student document in that collection
    return newStudent;
  }

  return newUser;
};

export const UserServices = {
  addStudentIntoDB,
};
