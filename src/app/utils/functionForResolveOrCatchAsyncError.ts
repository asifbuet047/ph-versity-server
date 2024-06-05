import { NextFunction, Request, RequestHandler, Response } from "express";

export const functionForResolveOrCatchAsyncError = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(err => next(err));
  };
};
// higher order fuinction which receive a function and return a function