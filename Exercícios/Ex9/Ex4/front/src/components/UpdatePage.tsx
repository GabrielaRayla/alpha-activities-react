import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { IApiResponse, IUser } from "../interfaces/interface";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { useModal } from "./Modal";

export const UpdatePage = () => {
  const { setUser } = useContext(UserContext);
  const [EasyModal, openModal] = useModal();
  const navigate = useNavigate();

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
        navigate("/home");
        console.log(result, "result");
        return;
      }
      throw console.error("Usuário não está cadastrado.");
    } catch (error) {
      console.log(error);
      openModal();
    }
  }

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <EasyModal />
      <h3>Atualizar</h3>
      <Form onSubmit={updateUser} />
    </div>
  );
};
