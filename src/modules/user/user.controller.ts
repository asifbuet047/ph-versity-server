import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.services";

const functionForResolveOrCatchAsyncError = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(err => next(err));
  };
}; // higher order fuinction which receive a function and return a function
const addStudent = functionForResolveOrCatchAsyncError(
  async (req, res, next) => {
    const { password, student } = req.body;

    const result = await UserServices.addStudentIntoDB(password, student);

    res.status(200).json({
      success: true,
      message: "User addition successful",
      data: result,
    });
  },
);

export const UserController = {
  addStudent,
};
