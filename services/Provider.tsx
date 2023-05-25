import { useReducer } from "react";
import { ApiContext, ApiDispatchContext } from "./context";
import { apiReducer } from "./reducer";

const ApiProvider = ({ children }: any) => {
  const [api, apiDispatch] = useReducer(apiReducer, {});
  return (
    <ApiContext.Provider value={api}>
      <ApiDispatchContext.Provider value={apiDispatch}>
        {children}
      </ApiDispatchContext.Provider>
    </ApiContext.Provider>
  );
};

export { ApiProvider };
