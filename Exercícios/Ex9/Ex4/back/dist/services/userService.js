var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Accountsrepo } from "../repository/userRepository.js";
import { config } from "dotenv";
const accountsRepo = new Accountsrepo();
config();
// import JWT from "jsonwebtoken";
// import { config } from "dotenv";
const TAG = "userService";
export class AccountsService {
    createUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = yield accountsRepo.createUser(email, password);
                return dbResponse;
            }
            catch (error) {
                console.log(TAG, "error caught at");
                throw error;
            }
        });
    }
    login(_email, _password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield accountsRepo.login(_email, _password);
                return resp;
            }
            catch (error) {
                console.log(TAG, "error caught");
                throw error;
            }
        });
    }
    updateUser(_id, _email, _password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield accountsRepo.updateUser(_id, _email, _password);
                // console.log("caiu servc");
                return resp;
            }
            catch (error) {
                console.log(TAG, "error caught");
                throw error;
            }
        });
    }
}
