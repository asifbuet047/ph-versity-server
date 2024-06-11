import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { TUser } from "./user.interface";
import { UserModel } from "./user.models";

const findLastStudentId = async () => {
  const lastStudent = await UserModel.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generateStudentID = async (semester: TAcademicSemester) => {
  let currentId = "0";
  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentStudentYear = semester.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === semester.code &&
    lastStudentYear === currentStudentYear
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `${semester.year}${semester.code}${incrementId}`;

  return incrementId;
};
