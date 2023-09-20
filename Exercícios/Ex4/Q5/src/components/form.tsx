type PropTypes = {
  onSubmit: () => void;
};

export const Form = ({ onSubmit }: PropTypes) => {
  return (
    <>
      <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button onClick={onSubmit}>Enviar</button>
      </form>
    </>
  );
};
