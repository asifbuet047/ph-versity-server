import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.services";
import { requestResolveOrCatchAsyncError } from "../../utils/requestResolveOrCatchAsyncError";
import httpStatus from "http-status";

const findSingleStudent = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StudentServices.findSingleStudentFromDB(
      req.params.studentId,
    );

    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetching specific student successful",
      data: result ?? "Not found",
    });
  },
);

const findAllStudent = requestResolveOrCatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StudentServices.findAllStudentFromDB();

    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetching all student successful",
      data: result,
    });
  },
);

export const StudentController = {
  findSingleStudent,
  findAllStudent,
};
