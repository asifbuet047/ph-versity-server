import config from "../../config/index";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import StudentModel from "../student/student.models";
import { TUser } from "./user.interface";
import { UserModel } from "./user.models";
import { generateStudentID } from "./users.utils";

const addStudentIntoDB = async (password: string, studentInfo: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);
  userData.role = "student";

  const academicSemester = await AcademicSemesterModel.findById(
    studentInfo.academicSemester,
  );

  userData.id = await generateStudentID(academicSemester as TAcademicSemester);

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
