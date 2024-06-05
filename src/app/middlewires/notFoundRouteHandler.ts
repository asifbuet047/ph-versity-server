/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";

const notFoundRouteHandler: RequestHandler = (req, res, next) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "No route",
  });
};

export default notFoundRouteHandler;
