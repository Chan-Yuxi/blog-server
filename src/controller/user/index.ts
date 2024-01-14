import express from "express";

import User from "@/bean/User";

const userController = express.Router();

userController.get("/insert", async (request, response) => {
  const user = new User(
    "1",
    "1",
    "chan",
    "1234",
    "Chan",
    "2438149743@qq.com",
    "10086",
    "Hello World",
    new Date(),
    new Date(),
    ""
  );

  console.log(await user.insert());
  console.log(await user.delete());

  response.end("done");
});

export default userController;
