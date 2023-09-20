import pool from "../pool/index.js";
const TAG = "userRepository";

export class Accountsrepo {
  public async createUser(email: string, password: string) {
    try {
      const emailDuplicateCheck = `
                    SELECT
                            count(usuario.email)
                    FROM
                            usuario
                    WHERE 
                            usuario.email = $1`;

      const emailDuplicate = await pool.query(emailDuplicateCheck, [email]);

      if (emailDuplicate.rows[0].count == 1) {
        throw "Já existe uma conta associada a esse email";
      }

      const createUserQuery = `
                    INSERT INTO usuario (
                            id,
                            email,
                            password
                    )
                    VALUES (
                            gen_random_uuid(),
                            $1,
                            $2
                    )
                    RETURNING
                            id,
                            email`;

      const response = await pool.query(createUserQuery, [email, password]);
      console.log(response.rows, "response.rows");
      return response.rows;
    } catch (error) {
      console.log(TAG, "error caught at createUser()");
      throw error;
    }
  }
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
