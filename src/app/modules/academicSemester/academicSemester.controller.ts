import { requestResolveOrCatchAsyncError } from "../../utils/requestResolveOrCatchAsyncError";
import { AcademicSemesterServices } from "./academicSemester.services";

const createAcademicSemester = requestResolveOrCatchAsyncError(
  async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      req.body,
    );
    res.status(200).json({
      success: true,
      message: "Academic Semester addition successful",
      data: result,
    });
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
};
