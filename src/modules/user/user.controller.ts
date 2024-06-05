import { RequestHandler } from "express";
import { UserServices } from "./user.services";

const addStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student } = req.body;

    const result = await UserServices.addStudentIntoDB(password, student);

    res.status(200).json({
      success: true,
      message: "User addition successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  addStudent,
};
