import { createContext } from "react";
import colors from "tailwindcss/colors";

export const siteConfig = {
  name: "Solar Orodja",
  logo: "/solar-energy.png",
  mainPageUrl: "https://klemen-komel.com",
  mainColor: colors.orange[500],
};

export const ConfigContext = createContext(siteConfig);
