import translationsSl from "@/app/(utils)/lang/sl.json";
import translationsEn from "@/app/(utils)/lang/en.json";

import { siteConfig } from "./config";

let transationObject: any = null;
switch (siteConfig.language) {
  case "si":
    transationObject = translationsSl;
    break;
  default:
    transationObject = translationsEn;
    break;
}

const t = (key: string) => (transationObject[key] as string) || key;

export default t;
