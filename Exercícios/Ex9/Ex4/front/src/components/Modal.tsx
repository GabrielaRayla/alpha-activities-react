import "../styles/modal.modules.css";
import { useState } from "react";

interface PropTypes {
  children: string;
  onClick: () => void;
}

const Modal = ({ children, onClick }: PropTypes) => {
  function stopPropagation(event: React.MouseEvent): void {
    event.stopPropagation();
  }

  return (
    <div className="modal-background" onClick={onClick}>
      <div className="modal-content" onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
};

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function EasyModal() {
    return (
      isOpen && (
        <Modal onClick={() => closeModal()}>
          {"Erro ao enviar o formulário"}
        </Modal>
      )
    );
  }
  return [EasyModal, openModal] as [() => JSX.Element, () => void];
}
