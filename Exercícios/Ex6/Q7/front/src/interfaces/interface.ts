export interface IApiResponse<T> {
  data: T;
  errors: Array<string>;
}

export interface ILoginData {
  id: any;
}
