import { UserServices } from "./user.services";
import { requestResolveOrCatchAsyncError } from "../../utils/requestResolveOrCatchAsyncError";

const addStudent = requestResolveOrCatchAsyncError(
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
