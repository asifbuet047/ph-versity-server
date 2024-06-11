import { Router } from "express";
import { validateRequest } from "../../middlewires/validateRequest";
import { AcademicSemesterValidationSchema } from "./academicSemester.validation";
import { AcademicSemesterController } from "./academicSemester.controller";

const router = Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidationSchema.createAcademicSemesterValidationSchema,
  ),
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

router.patch(
  "/:semesterId",
  validateRequest(
    AcademicSemesterValidationSchema.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterController.updateSingleAcademicSemester,
);

export const AcademicSemesterRouter = router;
