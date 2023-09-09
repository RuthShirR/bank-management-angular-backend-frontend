
import { Request, Response, NextFunction } from "express";
import { RouteNotFoundError } from "../Models/client-errors";

// Middleware for handling route not found errors
const ErrorHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const err = new RouteNotFoundError(request.originalUrl);
  next(err);
};

export default ErrorHandler;

