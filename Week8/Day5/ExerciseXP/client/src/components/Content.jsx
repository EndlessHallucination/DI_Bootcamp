import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <h1>React Hooks Exercises</h1>

      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      {children}
    </div>
  );
}

export default Content;