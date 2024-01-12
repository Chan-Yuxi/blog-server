import express from "express";
import controllers from "./controller";

import dotenv from "dotenv";
import morgan from "morgan";

const app = express();

dotenv.config();

app.use(morgan("combined"));
app.use(express.json());

controllers.forEach(({ path, controller }) => app.use(path, controller));

app.listen(process.env.port);
