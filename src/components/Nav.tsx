interface NavProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Nav: React.FC<NavProps> = ({ setTheme }) => {
  const themes = ["light", "dark", "red", "yellow", "blue", "green"];

  return (
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
  );
};

export default Nav;
