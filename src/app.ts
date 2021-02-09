import express from "express";

const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Server running");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
