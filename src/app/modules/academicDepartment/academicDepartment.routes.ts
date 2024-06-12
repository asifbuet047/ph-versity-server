import express from "express";
import { validateRequest } from "../../middlewires/validateRequest";
import { AcademicDepartmentValidationSchema } from "./academicDepartment.validation";
import { AcademicDepartmentController } from "./academicDepartment.controller";

const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(
    AcademicDepartmentValidationSchema.createAcademicdepartmentValidationSchema,
  ),
  AcademicDepartmentController.createAcademicDepartment,
);

router.get("/", AcademicDepartmentController.findAllAcademicDepartment);

router.get(
  "/:departmentId",
  AcademicDepartmentController.findSingleAcademicDepartment,
);

router.patch(
  "/:departmentId",
  AcademicDepartmentController.updateSingleAcademicDepartment,
);

export const AcademicDepartmentRouter = router;
