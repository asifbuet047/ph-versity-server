import { UserServices } from "./user.services";
import { requestResolveOrCatchAsyncError } from "../../utils/requestResolveOrCatchAsyncError";
import { NextFunction, Request, Response } from "express";

const addStudent = requestResolveOrCatchAsyncError(
  async (req:Request, res:Response, next:NextFunction) => {
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
