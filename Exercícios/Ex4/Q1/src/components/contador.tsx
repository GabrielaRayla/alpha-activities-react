import { useState } from "react";
import "./contador.css";

export const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)} className="">
        +
      </button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
    </div>
  );
};
