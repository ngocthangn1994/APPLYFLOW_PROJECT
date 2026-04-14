import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: err.message || "Validation error",
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      message: "Duplicate field value entered",
      fields: err.keyValue,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid resource id",
    });
  }

  res.status(err.statusCode || 500).json({
    message: err.message || "Server error",
  });
};
