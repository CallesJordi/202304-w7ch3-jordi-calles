import type CustomError from "../../CustomError/CustomError.js";
import { type Request, type Response, type NextFunction } from "express";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug("items-api: server/middlewares/errorMiddlewares.ts");

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = error.statusCode || 500;

  const message = error.statusCode ? error.message : "Internal Server Error";

  debug(`Error: ${chalk.red(error.statusCode)} ${chalk.red(error.message)}`);

  res.status(statusCode).json({ message });
};
