import { Form } from "./Form";
import { IApiResponse, IUser } from "../interfaces/interface";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import * as S from "../styles/styled";

export const SignUpPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

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
        "http://localhost:8000/accounts/register",
        options
      );
      console.log(response, "response");

      if (response.ok) {
        const result: IApiResponse<IUser> = await response.json();
        console.log(result, "login");
        navigate("/");
        return;
      }
      throw console.error("Não foi possível cadastrar o usuário.");
    } catch (error) {
      console.log(error);
      setModalIsOpen(true);
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <S.Div>
      {modalIsOpen && (
        <Modal
          children={"Não foi possível fazer o cadastro"}
          onClick={closeModal}
        />
      )}
      <h2>Cadastro</h2>
      <Form onSubmit={formSubmitted} />
    </S.Div>
  );
};
