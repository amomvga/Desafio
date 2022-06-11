import express from "express";
import UserController from "../controller/UserController";

const users = express.Router();

users.post("/users", UserController.create);
users.get("/users", UserController.findAll);
users.get("/users/:userId", UserController.findOne);
users.put("/user/:userId", UserController.update);
users.delete("/user/:userId", UserController.destroy);

export { users };
