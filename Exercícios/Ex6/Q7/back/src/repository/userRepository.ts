import pool from "../pool/index.js";
const TAG = "userRepository";

export class Accountsrepo {
  public async login(_email: string, _password: string) {
    try {
      const loginUserQuery = `
                                        SELECT *
                                        FROM usuario 
                                        WHERE email = $1
                                        AND password = $2`;

      const response = await pool.query(loginUserQuery, [_email, _password]);
      return response.rows;
    } catch (error) {
      console.log(TAG, "error caught at loginUser()");
      throw error;
    }
  }
}
