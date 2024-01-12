import express from "express";
import { getUserById } from "../services/user";
import Result from "../utils/result";

const userController = express.Router();

/**
 *
 */
userController.get("/:id", async (request, response) => {
  const user = await getUserById(request.params.id);
  response.json(new Result(200, "OK", user));
  response.end();
});

export default userController;
