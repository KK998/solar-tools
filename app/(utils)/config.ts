import { createContext } from "react";
import colors from "tailwindcss/colors";

type Language = "si" | "en";

export const siteConfig = {
  name: "Solar Orodja",
  logo: "/solar-energy.png",
  mainPageUrl: "https://klemen-komel.com",
  mainColor: colors.orange[500],
  language: "si" as Language,
};

export const ConfigContext = createContext(siteConfig);
