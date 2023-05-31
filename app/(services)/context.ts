"use client";

import { createContext } from "react";
import { OffGridApiResponse } from "@/app/api/orodja/pv-sistemi/off-grid/route";
import { OnGridApiResponse } from "@/app/api/orodja/pv-sistemi/on-grid/route";
import { SevanjeApiResponse } from "@/app/api/orodja/sevanje/(utils)/types";

export interface ApiContextState {
  offGrid?: OffGridApiResponse;
  onGrid?: OnGridApiResponse;
  sevanje?: SevanjeApiResponse;
}

export type ApiContextAction =
  | { type: "SET_OFF_GRID"; payload: OffGridApiResponse }
  | { type: "SET_ON_GRID"; payload: OnGridApiResponse }
  | { type: "SET_SEVANJE"; payload: SevanjeApiResponse };

const ApiContext = createContext<ApiContextState>({});
const ApiDispatchContext =
  createContext<React.Dispatch<ApiContextAction> | null>(null);

export { ApiContext, ApiDispatchContext };
