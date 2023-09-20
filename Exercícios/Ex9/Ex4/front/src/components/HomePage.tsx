import { ProfileCard } from "./ProfileCard";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  if (!user) return <Navigate to="/" />;
  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <h1>Home: sua página logada</h1>
      <ProfileCard />
      <nav>
        <ul>
          <li>
            <Link to="/update">Atualizar Cadastro</Link>
          </li>
          <li>
            <Link to="/">Sair</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
