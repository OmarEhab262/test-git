import { ReactNode, useState } from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div
      className={` ${theme} w-full min-h-screen transition duration-300 ease-in-out flex gap-6 flex-col p-4`}
    >
      <Nav theme={theme} setTheme={setTheme} />
      <div className={theme}> {children}</div>
    </div>
  );
};

export default Layout;
