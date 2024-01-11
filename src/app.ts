import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    message: "your message is available",
  });
});

app.listen(process.env.port);
