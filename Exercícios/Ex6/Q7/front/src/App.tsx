import { useState } from "react";
import { LoginPage } from "./components/login-page";
import { HomePage } from "./components/HomePage";

export const App = () => {
  const [page, setPage] = useState("loginPage");

  function handlePage(newPage: string) {
    setPage(newPage);
  }

  return (
    <div>
      {page === "loginPage" ? (
        <LoginPage pageInfo={handlePage} />
      ) : (
        <HomePage />
      )}
    </div>
  );
};
