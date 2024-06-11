import { NextFunction, Request, Response } from "express";
import { requestResolveOrCatchAsyncError } from "../../utils/requestResolveOrCatchAsyncError";
import { AcademicFacultyServices } from "./academicFaculty.services";
import httpStatus from "http-status";

const createAcademicFaculty = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
      req.body,
    );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Academic Faculty addition successful",
      data: result,
    });
  },
);

const findAllAcademicFaculty = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();

    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetching all Academic Faculty successful",
      data: result,
    });
  },
);

const findSingleAcademicFaculty = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(
      req.params.facultyId,
    );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetching specific Academic Faculty successful",
      data: result,
    });
  },
);

const updateSingleAcademicFaculty = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademicFacultyServices.updateSingleAcademicFacultyIntoDB(
        req.params.facultyId,
        req.body,
      );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Updating specific Academic Faculty successful",
      data: result,
    });
  },
);

export const AcademicFacultyController = {
  createAcademicFaculty,
  findAllAcademicFaculty,
  findSingleAcademicFaculty,
  updateSingleAcademicFaculty,
};
