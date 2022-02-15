import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { initDB } from "./api/connectDb";

// Init config
dotenv.config();
const port = process.env.SERVER_PORT;

const app: Application = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

// connect to mongo
initDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

