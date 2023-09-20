import { AccountsService } from "../services/userService.js";
import { Response, Request } from "express";
import {
  EmailValidator,
  PasswordValidator,
  NameValidator,
} from "../validators/validators.js";
const TAG = "users controller";
const accountsService = new AccountsService();

type ErrorType = string | string[] | null;

interface IResponse<T = ErrorType> {
  message: string;
  data: any;
  error: T;
}

export class AccountsController {
  public async createUser(req: Request, res: Response) {
    // console.log("req.body", req.body);

    const response: IResponse = {
      message: "",
      data: null,
      error: null,
    };

    try {
      const { email, password } = req.body;

      new EmailValidator(email);
      new PasswordValidator(password);

      const serviceResponse = await accountsService.createUser(email, password);

      // console.log(serviceResponse, "resposta");
      response.message = "Usuário criado com sucesso!";
      response.data = serviceResponse[0];
      response.error = null;

      res.status(200).json(response);
    } catch (error: any) {
      console.log(TAG, "\n", error);

      response.message = "Não foi possível criar um usuário!";
      response.data = null;
      response.error = error;

      res.status(500);
      res.json(JSON.stringify(response));
    }
  }
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
        response.data = serviceResponse[0];
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
  public async updateUser(req: Request, res: Response) {
    const { id, email, password } = req.body;
    // console.log(req.body, "updating");

    const response: IResponse = {
      message: "",
      data: null,
      error: null,
    };

    try {
      new EmailValidator(email);
      new PasswordValidator(password);

      const userId = req.cookies["sessionID"];

      const serviceResponse = await accountsService.updateUser(
        userId,
        email,
        password
      );
      if (serviceResponse[0]) {
        response.message = "Usuário atualizado com sucesso!";
        response.data = serviceResponse[0];

        res.status(200).json(response);
      } else {
        throw "Não foi possível atualizar!";
      }
    } catch (error) {
      console.log(TAG, error);

      response.message = "Erro interno do Servidor";
      response.data = null;
      response.error = "Erro interno do Servidor";

      res.status(500).json(response);
    }
  }
}
