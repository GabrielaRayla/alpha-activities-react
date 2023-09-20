import { useState } from "react";
import { IUser } from "./interfaces/interface";
import { UserContext } from "./contexts/UserContext";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";
import { SignUpPage } from "./components/SignUpPage";
import { UpdatePage } from "./components/UpdatePage";

export const App = () => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/update" element={<UpdatePage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};
