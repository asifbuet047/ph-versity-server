import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";

const UserRoute = express.Router();

const routeLevelMiddleware = (param: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(param);
    next();
  };
};

UserRoute.post(
  "/add-student",
  routeLevelMiddleware("Test parametered midldewire"),
  UserController.addStudent,
);

export default UserRoute;
