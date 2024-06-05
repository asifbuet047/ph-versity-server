import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.services";

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const student = await StudentServices.getSingleStudentFromDB(id);
    res.status(200).json({
      status: true,
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getSingleStudent,
};
