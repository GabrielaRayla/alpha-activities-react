import ReactDOM from "react-dom/client";
import { Contador } from "./components/contador";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Contador />);
