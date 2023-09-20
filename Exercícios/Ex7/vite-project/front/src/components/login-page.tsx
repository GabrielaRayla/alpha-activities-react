import { useState, useContext } from "react";
import { Modal } from "./Modal";
import { Form } from "./form";
import { IApiResponse, IUser } from "../interfaces/interface";
import { LoginPageProps } from "../interfaces/interface";
import { UserContext } from "../contexts/UserContext";
import * as S from "../styles/styled";

export const LoginPage = ({ pageInfo }: LoginPageProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);

  async function formSubmitted(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };

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
        pageInfo("HomePage");
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
    </S.Div>
  );
};
