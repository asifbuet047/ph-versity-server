import { Application, Request, Response } from "express";
import express from "express";
import { UserRoute } from "./modules/user/user.routes";
import globalErrorHandler from "./middlewires/globalErrorHandler";
import notFoundRouteHandler from "./middlewires/notFoundRouteHandler";

const app: Application = express();

app.use(express.json());
app.use("/api/v1", UserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
app.use(notFoundRouteHandler);

export default app;
