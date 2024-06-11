import express from "express";
import { validateRequest } from "../../middlewires/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyController } from "./academicFaculty.controller";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.createAcademicFaculty,
);

router.get("/", AcademicFacultyController.findAllAcademicFaculty);

router.get("/:facultyId", AcademicFacultyController.findSingleAcademicFaculty);

router.patch(
  "/:facultyId",
  AcademicFacultyController.updateSingleAcademicFaculty,
);

export const AcademicFacultyRouter = router;
