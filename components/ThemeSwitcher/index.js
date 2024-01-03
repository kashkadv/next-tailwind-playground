"use client";

import { useTheme } from "next-themes";
import Button from "../Button";
import { useEffect, useState } from "react";

import MoonIcon from "../../public/icons/moon-icon.svg";
import SunIcon from "../../public/icons/sun-icon.svg";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <MoonIcon className="text-red-500" />
      <SunIcon className="text-red-500" />
      <Button
        action={() => (theme == "light" ? setTheme("dark") : setTheme("light"))}
        label={`Toggle theme to ${theme == "light" ? "dark" : "light"}`}
      />
    </>
  );
}
