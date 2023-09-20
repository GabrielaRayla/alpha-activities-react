import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const ProfileCard = () => {
  const { user } = useContext(UserContext);
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Perfil</h3>
      <p>{user?.email}</p>
    </div>
  );
};
