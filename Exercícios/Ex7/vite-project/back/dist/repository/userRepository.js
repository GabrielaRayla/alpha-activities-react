var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pool from "../pool/index.js";
const TAG = "userRepository";
export class Accountsrepo {
    login(_email, _password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loginUserQuery = `
                                        SELECT *
                                        FROM usuario 
                                        WHERE email = $1
                                        AND password = $2`;
                const response = yield pool.query(loginUserQuery, [_email, _password]);
                return response.rows;
            }
            catch (error) {
                console.log(TAG, "error caught at loginUser()");
                throw error;
            }
        });
    }
    updateUser(_id, _email, _password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateUserQuery = `
                                    UPDATE 
                                            usuario
                                            SET
                                            email = $2,
                                            password = $3
                                    WHERE 
                                    usuario.id = $1
                                    RETURNING *`;
                const response = yield pool.query(updateUserQuery, [
                    _id,
                    _email,
                    _password,
                ]);
                return response.rows;
            }
            catch (error) {
                console.log(TAG, "error caught at updateUser()");
                throw error;
            }
        });
    }
}
// UPDATE
//                                             usuario
//                                             SET
//                                             email = $1,
//                                             password = $2
//                                     WHERE
//                                     usuario.id = $3
//                                     RETURNING id, email, password
