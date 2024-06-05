import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";

const UserRoute = express.Router();

const routeLevelMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("I am a amiddle wire at route level");
  console.log(req);
  next();
};

UserRoute.post("/add-student", routeLevelMiddleware, UserController.addStudent);

export default UserRoute;
