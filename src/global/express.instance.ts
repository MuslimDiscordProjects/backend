import e from "express";
import morgan from "morgan";
import JWTValidator from "../middlewares/JWTValidator.mw";
import router from "../routers/router";
import multer from "multer";
import { cors } from "../middlewares/cors.mw";

const express = e();
express
  .use(cors)
  .use(JWTValidator)
  .use(e.json())
  .use(router)
  .use(morgan("common"));

export default express;
