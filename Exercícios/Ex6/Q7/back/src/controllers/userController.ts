import { AccountsService } from "../services/userService.js";
import { Response, Request } from "express";
import { EmailValidator, PasswordValidator } from "../validators/validators.js";
const TAG = "users controller";
const accountsService = new AccountsService();

type ErrorType = string | string[] | null;

interface IResponse<T = ErrorType> {
  message: string;
  data: any;
  error: T;
}

export class AccountsController {
  public async login(req: Request, res: Response) {
    // Padronizar a resposta
    const response: IResponse = {
      message: "",
      data: null,
      error: null,
    };

    try {
      const { email, password } = req.body;
      new EmailValidator(email);
      new PasswordValidator(password);
      const serviceResponse = await accountsService.login(email, password);

      if (serviceResponse[0]) {
        const userId: any = serviceResponse[0].id;
        res.cookie("sessionID", userId, { maxAge: 300000, httpOnly: true });

        response.message = "Usuário logado com sucesso!";
        response.data = serviceResponse;
        response.error = null;

        res.status(200).json(response);
      } else {
        throw "Usuário não está cadastrado!";
      }
    } catch (error) {
      response.message = "Usuário não está cadastrado!";
      response.error = "Usuário não está cadastrado!";
      console.log(error);
      res.status(400).json(response);
    }
  }
}
