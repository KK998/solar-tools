"use client";

import { Button, ButtonProps } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";

const checkHtmlThemeClass = () => {
  if (typeof localStorage === "undefined") return "dark";

  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme) {
    return localStorageTheme as "dark" | "light";
  }
  return "dark";
};

const ThemeToggler = ({ ...props }: ButtonProps) => {
  const [theme, setTheme] = useState<"dark" | "light">(checkHtmlThemeClass);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      const opositeTheme = theme === "dark" ? "light" : "dark";
      html.classList.remove(opositeTheme);
      html.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleThemeChange = useCallback(() => {
    setTheme((p) => (p === "dark" ? "light" : "dark"));
  }, []);

  return (
    <Button
      onClick={handleThemeChange}
      color="primary"
      role="button"
      {...props}
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </Button>
  );
};

export default ThemeToggler;
