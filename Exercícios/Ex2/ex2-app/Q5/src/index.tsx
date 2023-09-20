import ReactDOM from "react-dom/client";

interface IUser {
  firstName: string;
  lastName: string;
  birthDate: Date;
}

const dateString = "02-10-1998";
const [day, month, year] = dateString.split("-").map(Number);

const user: IUser = {
  firstName: "Gabriela",
  lastName: "Rayla Teixeira de Carvalho",
  birthDate: new Date(year, month - 1, day),
};

function formatName(user: IUser): string {
  return `${user.firstName} ${user.lastName}`;
}

function getAge(user: IUser) {
  const dateNow = new Date();
  const userBirthday = new Date(
    dateNow.getFullYear(),
    user.birthDate.getMonth(),
    user.birthDate.getDate()
  );
  const age =
    dateNow.getFullYear() -
    user.birthDate.getFullYear() -
    (dateNow < userBirthday ? 1 : 0);
  return age;
}

const element: JSX.Element = (
  <h1>
    Olá, meu nome completo é{formatName(user)}, tenho {getAge(user)} anos e esse
    é meu primeiro contato com JSX.
  </h1>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(element);
