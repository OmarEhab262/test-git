import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Nav from "./components/Nav"; // Keep this
import Footer from "./components/Footer"; // Keep this

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Layout theme={theme}>
      <Nav theme={theme} setTheme={setTheme} />
      <div
        className={`${theme} transition duration-300 ease-in-out flex gap-6 flex-col p-4`}
      >
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <div>
          <button
            className={`btn-${theme}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Toggle Theme
          </button>
          <input
            className={`input-${theme}`}
            type="text"
            placeholder="User Name"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem
          fugit esse, eos enim culpa...
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem
          fugit esse, eos enim culpa...
        </p>
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
