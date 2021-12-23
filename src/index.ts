import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Init config
dotenv.config();

const app: express.Application = express();
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Server running");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
