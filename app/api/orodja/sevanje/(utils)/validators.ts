import { SevanjeApiBody } from "./types";

export const readBodyValueOrThrow = (body: SevanjeApiBody) => {
  const requiredKeys = [
    "lat",
    "lon",
    "raddatabase",
    "startyear",
    "endyear",
    "horirrad",
    "optrad",
    "mr_dni",
    "avtemp",
  ];
  const missingKeys = requiredKeys.filter((key) => !(key in body));
  if (missingKeys.length > 0) {
    throw new Error(`Missing values: ${missingKeys.join(", ")}`);
  }
};
