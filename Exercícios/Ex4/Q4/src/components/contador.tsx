import { useState } from "react";
import "./contador.css";

interface propTypes {
  onRemove: () => void;
}

export const Contador = ({ onRemove }: propTypes) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)} className="">
        +
      </button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={onRemove}>Remover</button>
      <p>{count}</p>
    </div>
  );
};
