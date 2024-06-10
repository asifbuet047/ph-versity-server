import express from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middlewires/validateRequest";
import { createStudentValidationSchema } from "../student/student.validation";

const UserRoute = express.Router();

UserRoute.post(
  "/add-student",
  validateRequest(createStudentValidationSchema),
  UserController.addStudent,
);

export default UserRoute;
