import { useContext } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { ThemeContext } from "./context/ThemeContext";

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is undefined");
  }

  const { theme } = themeContext;

  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <Nav />
      Hello
    </div>
  );
};

export default App;
