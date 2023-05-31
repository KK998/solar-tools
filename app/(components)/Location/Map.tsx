"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";

import { useCallback, useContext, useState } from "react";
import { LocationContext, LocationDispatchContext } from "./context";

import "leaflet/dist/leaflet.css";
import { Button, Spinner, TextInput } from "flowbite-react";
import useCurrentPosition from "./useCurrentPosition";
import t from "@/app/(utils)/translate";

const MapView = () => {
  const { marker } = useContext(LocationContext);
  let map = useMap();
  map.setView(marker, marker[0] > 0 && marker[1] > 0 ? 14 : 3);

  return null;
};

const Map = () => {
  const dispatch = useContext(LocationDispatchContext);
  const { location, marker } = useCurrentPosition();
  const [isLoading, setIsLoading] = useState(false);

  const customIcon = new L.Icon({
    iconUrl: icon.src,
    iconSize: [25, 35],
    iconAnchor: [5, 30],
  });

  const handleLocationSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

      const data = new FormData(e.target as HTMLFormElement);
      const location = data.get("location") as string;

      fetch(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`
      )
        .then((response) => response.json())
        .then((data) => {
          const { lat, lon, display_name } = data[0];
          if (dispatch) {
            dispatch({ type: "SET_LOCATION", payload: display_name });
            dispatch({
              type: "SET_MARKER",
              payload: [parseFloat(lat), parseFloat(lon)],
            });
          }
        })
        .finally(() => setIsLoading(false));
    },
    [dispatch]
  );

  return (
    <div data-testid="Map" className="w-full">
      <div className="w-full rounded overflow-hidden shadow">
        <MapContainer
          scrollWheelZoom
          bounceAtZoomLimits
          dragging
          touchZoom
          style={{
            minHeight: "300px",
            minWidth: "300px",
            width: "100%",
            height: "100%",
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {location && (
            <Marker icon={customIcon} position={marker}>
              <Popup>{location}</Popup>
            </Marker>
          )}
          <MapView />
        </MapContainer>
      </div>
      <form onSubmit={handleLocationSearch} className="mt-4 flex gap-4">
        <TextInput
          className="flex-grow"
          placeholder={location}
          name="location"
          type="text"
        />
        <Button data-testid="MapSearch" type="submit">
          {isLoading && (
            <Spinner
              size="sm"
              className="mr-1"
              aria-label={t("calculations_loading")}
            />
          )}
          {t("search")}
        </Button>
      </form>
    </div>
  );
};

export default Map;
