import { useRef } from "react";

export const App = (): JSX.Element => {
  const inputFocus = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputFocus} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};
