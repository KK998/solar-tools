import { useContext, useEffect } from "react";
import { LocationContext, LocationDispatchContext } from "./context";
import { getLocationAddress } from "./api";

const useCurrentPosition = () => {
  const { location, marker } = useContext(LocationContext);
  const dispatch = useContext(LocationDispatchContext);

  useEffect(() => {
    if (window) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        if (dispatch) {
          dispatch({
            type: "SET_MARKER",
            payload: [position.coords.latitude, position.coords.longitude],
          });

          getLocationAddress(
            position.coords.latitude,
            position.coords.longitude
          ).then((data) => {
            dispatch({
              type: "SET_LOCATION",
              payload: data,
            });
          });
        }
      }, console.log);
    }
  }, [dispatch]);

  return { location, marker };
};

export default useCurrentPosition;
