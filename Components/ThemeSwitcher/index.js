import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="btn btn--bw"
      onClick={() => (theme == "light" ? setTheme("dark") : setTheme("light"))}
    >
      Toggle theme to {theme == "light" ? "dark" : "light"}
    </button>
  );
}
