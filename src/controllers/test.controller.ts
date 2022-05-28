import { Request, Response } from "express";
import logger from "../api/logger.js";

export async function testController(req: Request, res: Response) {
  logger.info("Checking the API status: Everything is OK");
  res.status(200).send({
    status: "UP",
    message: "The API is up and running!",
  });
}
