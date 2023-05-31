import { useContext } from "react";
import { ApiContext } from "./context";

const useApi = () => {
  const ctx = useContext(ApiContext);
  if (ctx === undefined) {
    throw new Error("useApi must be used within a ApiProvider");
  }
  return ctx;
};

export { useApi };
