export interface IApiResponse<T> {
  data: T;
  errors: Array<string> | null;
}

export interface FormProps {
  onSubmit: (email: string, password: string) => void;
}

export interface LoginPageProps {
  pageInfo: (page: string) => void;
}

export interface IUser {
  id: string | null;
  email: string | null;
  password?: string | null;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}
