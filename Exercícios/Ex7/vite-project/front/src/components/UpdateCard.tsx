import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { IApiResponse, IUser } from "../interfaces/interface";
import { Form } from "./form";
import { Modal } from "./Modal";

export const UpdateCard = () => {
  const { setUser } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  async function updateUser(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };

    const options: RequestInit = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    };
    try {
      const response: Response = await fetch(
        "http://localhost:8000/accounts/update",
        options
      );
      console.log(response, "response");

      if (response.ok) {
        const result: IApiResponse<IUser> = await response.json();
        setUser(result.data);
        console.log(result, "result");
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
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      {modalIsOpen && (
        <Modal
          children={"Não foi possível atualizar o usuário"}
          onClick={closeModal}
        />
      )}
      <h3>Atualizar</h3>
      <Form onSubmit={updateUser} />
    </div>
  );
};
