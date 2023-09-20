import { useState } from "react";
import { LoginPage } from "./components/login-page";
import { HomePage } from "./components/HomePage";
import { IUser } from "./interfaces/interface";
import { UserContext } from "./contexts/UserContext";

export const App = () => {
  const [page, setPage] = useState("loginPage");
  const [user, setUser] = useState<IUser | null>(null);

  function handlePage(newPage: string) {
    setPage(newPage);
  }

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {page === "loginPage" ? (
          <LoginPage pageInfo={handlePage} />
        ) : (
          <HomePage />
        )}
      </UserContext.Provider>
    </div>
  );
};
