import { NextFunction, Request, Response } from "express";
import { requestResolveOrCatchAsyncError } from "../../utils/requestResolveOrCatchAsyncError";
import { AcademicSemesterServices } from "./academicSemester.services";

const createAcademicSemester = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {

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
