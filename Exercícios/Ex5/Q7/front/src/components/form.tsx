import { useState } from "react";

interface PropTypes {
  onSubmit: (email: string, password: string) => void;
}

export const Form = ({ onSubmit }: PropTypes) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
