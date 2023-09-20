import { useState } from "react";
import { Contador } from "./components/contador";

export const App = () => {
  const [list, setList] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);

  function removeComponent(id: number) {
    const newList = list.filter((counter) => counter.id !== id);
    setList(newList);
  }
  return (
    <>
      {list.map((counter) => {
        return (
          <Contador
            key={counter.id}
            onRemove={() => removeComponent(counter.id)}
          />
        );
      })}
    </>
  );
};
