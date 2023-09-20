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
  public async updateUser(_id: string, _email: string, _password: string) {
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

      const response = await pool.query(updateUserQuery, [
        _id,
        _email,
        _password,
      ]);

      return response.rows;
    } catch (error) {
      console.log(TAG, "error caught at updateUser()");
      throw error;
    }
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
