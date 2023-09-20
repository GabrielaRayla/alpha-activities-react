import { useState } from "react";
import { Modal } from "./Modal";
import { Form } from "./form";

export const LoginPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function formSubmitted() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      {modalIsOpen && (
        <Modal children={"Form enviado com sucesso !"} onClick={closeModal} />
      )}
      <h1>Login</h1>
      <Form onSubmit={formSubmitted} />
    </div>
  );
};
