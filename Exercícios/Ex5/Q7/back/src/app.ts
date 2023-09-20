import express, { urlencoded } from "express";
import { route } from "./routes/router.js";
import cookieParser from "cookie-parser";
import cors from "cors";

export class App {
  public server: express.Application;

  constructor() {
    this.server = express(); // const server = express();
    this.middleware();
    this.route();
  }

  private middleware() {
    this.server.use(express.json()); //server.use(express.json());
    this.server.use(cookieParser()); //server.use(cookieParser());
    this.server.use(urlencoded({ extended: true }));
    this.server.use(cors());
  }

  private route() {
    this.server.use(route);
  }
}
