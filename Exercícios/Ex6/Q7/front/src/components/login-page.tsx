import { useState } from "react";
import { Modal } from "./Modal";
import { Form } from "./form";
import { IApiResponse, ILoginData } from "../interfaces/interface";
import * as S from "./styled";

interface PropTypes {
  pageInfo: (page: string) => void;
}

export const LoginPage = ({ pageInfo }: PropTypes) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  async function formSubmitted(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };

    const options: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      const response: Response = await fetch(
        "http://localhost:8000/accounts/login",
        options
      );
      console.log(response, "response");

      if (response.ok) {
        const result: IApiResponse<ILoginData> = await response.json();
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
