import express from "express";
import { login, test } from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.get("/", test);

authRouter.get("/login", login);

export default authRouter;
