import { UserServices } from "./user.services";
import { functionForResolveOrCatchAsyncError } from "../../utils/functionForResolveOrCatchAsyncError";

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
