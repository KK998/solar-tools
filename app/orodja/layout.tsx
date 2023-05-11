"use client";

import { useReducer, createContext } from "react";
import {
  LocationContext,
  LocationDispatchContext,
} from "@/components/Location/context";
import { locationReducer } from "@/components/Location/reduser";
import { OffGridApiResponse } from "../api/orodja/pv-sistemi/off-grid/route";
import { OnGridApiResponse } from "../api/orodja/pv-sistemi/on-grid/route";

interface ApiContextState {
  offGrid?: OffGridApiResponse;
  onGrid?: OnGridApiResponse;
}

type ApiContextAction =
  | { type: "SET_OFF_GRID"; payload: OffGridApiResponse }
  | { type: "SET_ON_GRID"; payload: OnGridApiResponse };

const apiReducer = (
  state: ApiContextState,
  action: ApiContextAction
): ApiContextState => {
  switch (action.type) {
    case "SET_OFF_GRID":
      return { ...state, offGrid: action.payload };
    case "SET_ON_GRID":
      return { ...state, onGrid: action.payload };
    default:
      return state;
  }
};

export const ApiContext = createContext<ApiContextState>({});
export const ApiDispatchContext =
  createContext<React.Dispatch<ApiContextAction> | null>(null);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [location, dispatch] = useReducer(locationReducer, {
    location: "",
    marker: [0, 0],
  });
  const [api, apiDispatch] = useReducer(apiReducer, {});

  return (
    <LocationContext.Provider value={location}>
      <LocationDispatchContext.Provider value={dispatch}>
        <ApiContext.Provider value={api}>
          <ApiDispatchContext.Provider value={apiDispatch}>
            <div className="flex flex-wrap gap-5 p-5">{children}</div>
          </ApiDispatchContext.Provider>
        </ApiContext.Provider>
      </LocationDispatchContext.Provider>
    </LocationContext.Provider>
  );
};

export default Layout;
