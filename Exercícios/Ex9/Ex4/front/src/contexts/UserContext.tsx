import { createContext } from "react";
import { IUserContext } from "../interfaces/interface";

export const UserContext = createContext<IUserContext>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
});
