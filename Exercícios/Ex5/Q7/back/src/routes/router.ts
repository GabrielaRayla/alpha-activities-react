import { Router } from "express";
import { AccountsController } from "../controllers/userController.js";

const route: Router = Router();
const accountsController = new AccountsController();

route.post("/accounts/login", accountsController.login);

export { route };
