import { Application, Request, Response } from "express";
import express from "express";
import globalErrorHandler from "./app/middlewires/globalErrorHandler";
import notFoundRouteHandler from "./app/middlewires/notFoundRouteHandler";
import UserRoute from "./app/modules/user/user.routes";
import { AcademicSemesterRouter } from "./app/modules/academicSemester/academicSemester.routes";
import { AcademicFacultyRouter } from "./app/modules/academicFaculty/academicFaculty.routes";
import { AcademicDepartmentRouter } from "./app/modules/academicDepartment/academicDepartment.routes";
import { StudentRouter } from "./app/modules/student/student.routes";

const app: Application = express();

app.use(express.json());
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/academic-semester", AcademicSemesterRouter);
app.use("/api/v1/academic-faculty", AcademicFacultyRouter);
app.use("/api/v1/academic-department", AcademicDepartmentRouter);
app.use("/api/v1/student", StudentRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
app.use(notFoundRouteHandler);

export default app;
