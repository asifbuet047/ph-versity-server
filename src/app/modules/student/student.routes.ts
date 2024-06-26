import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

router.get("/all-students", StudentController.findAllStudent);

router.get("/:studentId", StudentController.findSingleStudent);

export const StudentRouter = router;
