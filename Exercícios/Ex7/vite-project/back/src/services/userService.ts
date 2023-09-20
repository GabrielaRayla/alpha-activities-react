import { Accountsrepo } from "../repository/userRepository.js";
import { config } from "dotenv";

const accountsRepo = new Accountsrepo();

config();
// import JWT from "jsonwebtoken";
// import { config } from "dotenv";

const TAG = "userService";

export class AccountsService {
  public async login(_email: string, _password: string) {
    try {
      const resp = await accountsRepo.login(_email, _password);
      return resp;
    } catch (error) {
      console.log(TAG, "error caught");
      throw error;
    }
  }
  public async updateUser(_id: string, _email: string, _password: string) {
    try {
      const resp = await accountsRepo.updateUser(_id, _email, _password);
      // console.log("caiu servc");

      return resp;
    } catch (error) {
      console.log(TAG, "error caught");
      throw error;
    }
  }
}
