import { useReducer } from "react";
import { locationReducer } from "./reduser";
import { LocationContext, LocationDispatchContext } from "./context";

const withLocation = (
  Component: ({ children }: { children: React.ReactNode }) => JSX.Element
) => {
  const displayName = Component.name || "Component";

  const ComponentWithLocation = (props: any) => {
    const [location, dispatch] = useReducer(locationReducer, {
      location: "",
      marker: [0, 0],
    });
    return (
      <LocationContext.Provider value={location}>
        <LocationDispatchContext.Provider value={dispatch}>
          <Component {...props} />
        </LocationDispatchContext.Provider>
      </LocationContext.Provider>
    );
  };

  ComponentWithLocation.displayName = `withLocation(${displayName})`;

  return ComponentWithLocation;
};

export { withLocation };
