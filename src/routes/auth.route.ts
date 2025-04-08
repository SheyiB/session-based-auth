import express from "express";
import { login, signup, test } from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.get("/", test);

authRouter.post("/login", login);

authRouter.post("/signup", signup);

export default authRouter;
