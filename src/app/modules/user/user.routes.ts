import express from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middlewires/validateRequest";
import { StudentValidationSchema } from "../student/student.validation";
import { UsersValidationSchema } from "./users.validation";

const UserRoute = express.Router();

UserRoute.post(
  "/add-student",
  validateRequest(UsersValidationSchema.createUsersValidationSchema),
  validateRequest(StudentValidationSchema.createStudentValidationSchema),
  UserController.addStudent,
);

export default UserRoute;
