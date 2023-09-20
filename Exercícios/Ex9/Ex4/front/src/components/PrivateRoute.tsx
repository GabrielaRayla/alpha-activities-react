import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function PrivateRoute({ children }: any) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
