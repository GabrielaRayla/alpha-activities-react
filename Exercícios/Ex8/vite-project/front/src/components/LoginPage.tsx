import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { Form } from "./Form";
import { IApiResponse, IUser } from "../interfaces/interface";
import { UserContext } from "../contexts/UserContext";
import * as S from "../styles/styled";

// interface UserState {
//   id: string;
//   email: string;
// }

export const LoginPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  //const [user, setUser] = useState<UserState | null>(null);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function formSubmitted(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };

    // setUser({ id: "x", email: "email@a.com" });
    const options: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    };
    try {
      const response: Response = await fetch(
        "http://localhost:8000/accounts/login",
        options
      );
      console.log(response, "response");

      if (response.ok) {
        const result: IApiResponse<IUser> = await response.json();
        setUser(result.data);
        navigate("/home");
        console.log(result, "login");
        return;
      }
      throw console.error("Usuário não está cadastrado.");
    } catch (error) {
      console.log(error);
      setModalIsOpen(true);
    }
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <S.Div className="login">
      {modalIsOpen && (
        <Modal children={"Usuário não está cadastrado."} onClick={closeModal} />
      )}
      <h1>Login</h1>
      <Form onSubmit={formSubmitted} />
      <Link to="/register">Cadastre-se</Link>
    </S.Div>
  );
};
