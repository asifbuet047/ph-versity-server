import express from "express";
import { UserController } from "./user.controller";

export const UserRoute = express.Router();

UserRoute.post("/add-student", UserController.addStudent);
