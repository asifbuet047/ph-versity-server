import { Application, Request, Response } from "express";
import express from "express";
import globalErrorHandler from "./app/middlewires/globalErrorHandler";
import notFoundRouteHandler from "./app/middlewires/notFoundRouteHandler";
import UserRoute from "./app/modules/user/user.routes";

const app: Application = express();

app.use(express.json());
app.use("/api/v1", UserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
app.use(notFoundRouteHandler);

export default app;
