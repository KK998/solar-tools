import { createContext } from "react";
import type { LocationAction, LocationState } from "./reduser";

export const LocationContext = createContext<LocationState>({
  location: "",
  marker: [0, 0],
});
export const LocationDispatchContext =
  createContext<React.Dispatch<LocationAction> | null>(null);
