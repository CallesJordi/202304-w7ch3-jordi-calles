import { Error } from "mongoose";
import type CustomError from "../../CustomError/CustomError.js";
import { generalError } from "./errorMiddlewares";
import { type NextFunction, type Response, type Request } from "express";

type CustomResponse = Pick<Response, "status" | "json">;

const res: CustomResponse = {
  json: jest.fn(),
  status: jest.fn().mockReturnThis(),
};

const req = {};

const next = jest.fn();

describe("Given an generalError function", () => {
  describe("When it's called and receives an unknown error", () => {
    test("Then it should call a response with an status code 500 and a 'Internal Server Error' messasge", () => {
      const error = new Error("Internal Server Error");
      const statusCode = 500;
      const { message } = error;

      generalError(
        error as CustomError,
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(statusCode);
      expect(res.json).toHaveBeenCalledWith({ message });
    });
  });
});
