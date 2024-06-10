import { Router } from "express";
import { validateRequest } from "../../middlewires/validateRequest";
import { academicSemesterValidationSchema } from "./academicSemester.validation";
import { AcademicSemesterController } from "./academicSemester.controller";

const router = Router();

router.post(
  "/create-academic-semester",
  validateRequest(academicSemesterValidationSchema),
  AcademicSemesterController.createAcademicSemester,
);

router.get(
  "/all-academic-semester",
  AcademicSemesterController.findAllAcacademicSemester,
);

router.get(
  "/:semesterId",
  AcademicSemesterController.findSingleAcademicSemester,
);

export const AcademicSemesterRouter = router;
