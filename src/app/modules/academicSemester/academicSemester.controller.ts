import { NextFunction, Request, Response } from "express";
import { requestResolveOrCatchAsyncError } from "../../utils/requestResolveOrCatchAsyncError";
import { AcademicSemesterServices } from "./academicSemester.services";
import httpStatus from "http-status";

const createAcademicSemester = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      req.body,
    );
    res.status(httpStatus.OK).json({
      success: true,
      message: "Academic Semester addition successful",
      data: result,
    });
  },
);

const findAllAcacademicSemester = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterServices.findAllAcademicSemesterFromDB();

    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetching all Academic Semester successful",
      data: result,
    });
  },
);

const findSingleAcademicSemester = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterServices.findSingleAcademicSemesterFromDB(
        req.params.semesterId,
      );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetching specific Academic Semester successful",
      data: result,
    });
  },
);

const updateSingleAcademicSemester = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicSemesterServices.updateSingleAcademicSemesterIntoDB(
        req.params.semesterId,
        req.body,
      );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Updating specific Academic Semester successful",
      data: result,
    });
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
  findAllAcacademicSemester,
  findSingleAcademicSemester,
  updateSingleAcademicSemester,
};
