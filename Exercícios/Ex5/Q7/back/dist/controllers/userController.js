var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AccountsService } from "../services/userService.js";
import { EmailValidator, PasswordValidator } from "../validators/validators.js";
const TAG = "users controller";
const accountsService = new AccountsService();
export class AccountsController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Padronizar a resposta
            const response = {
                message: "",
                data: null,
                error: null,
            };
            try {
                const { email, password } = req.body;
                new EmailValidator(email);
                new PasswordValidator(password);
                const serviceResponse = yield accountsService.login(email, password);
                if (serviceResponse[0]) {
                    const userId = serviceResponse[0].id;
                    res.cookie("sessionID", userId, { maxAge: 300000, httpOnly: true });
                    response.message = "Usuário logado com sucesso!";
                    response.data = serviceResponse;
                    response.error = null;
                    res.status(200).json(response);
                }
                else {
                    throw "Usuário não está cadastrado!";
                }
            }
            catch (error) {
                response.message = "Usuário não está cadastrado!";
                response.error = "Usuário não está cadastrado!";
                console.log(error);
                res.status(400).json(response);
            }
        });
    }
}
