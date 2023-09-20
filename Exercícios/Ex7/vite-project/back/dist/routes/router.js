import { Router } from "express";
import { AccountsController } from "../controllers/userController.js";
const route = Router();
const accountsController = new AccountsController();
route.post("/accounts/login", accountsController.login);
route.patch("/accounts/update", accountsController.updateUser);
export { route };
