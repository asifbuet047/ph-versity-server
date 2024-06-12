import { Request, Response } from "express";
import { requestResolveOrCatchAsyncError } from "../../utils/requestResolveOrCatchAsyncError";
import { AcademciDepartmentServices } from "./academicDepartment.services";
import httpStatus from "http-status";

const createAcademicDepartment = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademciDepartmentServices.createAcademicDepartmentIntoDB(req.body);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Academic Department addition successful",
      data: result,
    });
  },
);

const findAllAcademicDepartment = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademciDepartmentServices.findAllAcademicDepartmentFromDB();

    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetching all Academic Department successful",
      data: result,
    });
  },
);

const findSingleAcademicDepartment = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademciDepartmentServices.findSingleAcademicDepartmentFromDB(
        req.params.departmentId,
      );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetching specific Academic Department successful",
      data: result,
    });
  },
);

const updateSingleAcademicDepartment = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await AcademciDepartmentServices.updateSingleAcademicDepartmentIntoDB(
        req.params.departmentId,
        req.body,
      );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Updating specific Academic Faculty successful",
      data: result,
    });
  },
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  findAllAcademicDepartment,
  findSingleAcademicDepartment,
  updateSingleAcademicDepartment,
};
