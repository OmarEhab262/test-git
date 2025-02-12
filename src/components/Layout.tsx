import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  theme: string;
}

const Layout: React.FC<LayoutProps> = ({ children, theme }) => {
  return (
    <div
      className={`${theme} w-full min-h-screen transition duration-300 ease-in-out flex gap-6 flex-col p-4`}
    >
      {children}
    </div>
  );
};

export default Layout;
