import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  const themes = ["light", "dark", "red", "yellow", "blue", "green"];
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Layout theme={theme}>
      <div className={`flex gap-6 p-4 rounded-2xl`}>
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`${t} cursor-pointer p-2 border rounded-lg w-[100px] `}
          >
            {t}
          </button>
        ))}
      </div>
      <div
        className={`${theme} transition duration-300 ease-in-out flex gap-6 flex-col p-4`}
      >
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <div>
          <button className={`btn-${theme} `}>Click Me</button>
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
