import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const Nav: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is undefined");
  }

  const { theme, toggleTheme } = themeContext;
  console.log("theme", theme);
  const themes = ["light", "dark", "red", "yellow", "blue", "green"];

  return (
    <div className="flex items-center gap-6 p-4 rounded-2xl">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => toggleTheme(t)}
          className={`${t} cursor-pointer p-2 border rounded-lg w-[100px]`}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default Nav;
