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

// api response mocks
import OffGridMockData from "@/app/api/orodja/pv-sistemi/off-grid/route.mock";
import OnGridMockData from "@/app/api/orodja/pv-sistemi/on-grid/route.mock";
import SevanjeMockData from "@/app/api/orodja/sevanje/(mock)/response";

const mock = {
  offGrid: OffGridMockData,
  onGrid: OnGridMockData,
  sevanje: SevanjeMockData,
};

type MockApiProviderProps = {
  children: React.ReactNode;
};

const MockApiProvider = ({ children }: MockApiProviderProps) => {
  return <ApiContext.Provider value={mock}>{children}</ApiContext.Provider>;
};

export { ApiProvider, MockApiProvider };
