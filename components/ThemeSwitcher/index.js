import { useTheme } from "next-themes";
import Button from "../Button";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const label = `Toggle theme to ${theme == "light" ? "dark" : "light"}`;

  return (
    <Button
      action={() => (theme == "light" ? setTheme("dark") : setTheme("light"))}
      label={label}
    />
  );
}
