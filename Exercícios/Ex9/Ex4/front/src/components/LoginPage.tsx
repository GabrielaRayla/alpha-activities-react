import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useModal } from "./Modal";
import { Form } from "./Form";
import { IApiResponse, IUser } from "../interfaces/interface";
import { UserContext } from "../contexts/UserContext";
import * as S from "../styles/styled";

export const LoginPage = () => {
  const [EasyModal, openModal] = useModal();
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
      openModal();
    }
  }

  return (
    <S.Div className="login">
      <EasyModal />
      <h1>Login</h1>
      <Form onSubmit={formSubmitted} />
      <Link to="/register">Cadastre-se</Link>
    </S.Div>
  );
};
