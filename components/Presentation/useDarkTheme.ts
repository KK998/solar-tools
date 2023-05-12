import { useEffect, useState } from "react";

const useDarkTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  return darkMode;
};

export default useDarkTheme;
