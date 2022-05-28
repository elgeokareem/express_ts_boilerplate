import express, { Application } from "express";
import morganMiddleware from "./middlewares/morgan.middleware.js";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./api/routes.js";
import { initDB } from "./api/connectDb.js";

// Init config
dotenv.config();
const port = process.env.SERVER_PORT || 3000;

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

// Routes
app.use(routes);

// connect to mongo
initDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
