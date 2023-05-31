"use client";

import { Button } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";

const checkHtmlThemeClass = () => {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme) {
    return localStorageTheme as "dark" | "light";
  }
  return "dark";
};

const ThemeToggler = () => {
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
    <Button onClick={handleThemeChange} color="primary" role="button">
      {theme === "dark" ? "🌞" : "🌙"}
    </Button>
  );
};

export default ThemeToggler;
