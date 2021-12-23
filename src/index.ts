import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Init config
dotenv.config();
const port = process.env.SERVER_PORT;

const app: express.Application = express();
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Server running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
