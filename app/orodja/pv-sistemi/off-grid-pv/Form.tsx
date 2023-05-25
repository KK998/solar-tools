"use client";
import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";

import {
  OffGridApiBody,
  OffGridApiResponse,
} from "@/app/api/orodja/pv-sistemi/off-grid/route";

import { LocationContext } from "@/components/Location/context";
import FormBuilder, { Field } from "@/components/Presentation/FormBuilder";
import { ApiDispatchContext } from "@/services/context";

interface FormNames {
  solarRadiationDatabase: string;
  installedPeakPvPower: number;
  batteryCapacity: number;
  dischargeCutOffLimit: number;
  consumptionPerDay: number;
  slope: number;
  azimuth: number;
}

interface FormField extends Field {
  name: keyof FormNames;
}

const formFields: FormField[] = [
  {
    name: "solarRadiationDatabase",
    label: "Solar radiation database",
    type: "select",
    options: ["PVGIS-SARAH2", "PVGIS-SARAH", "PVGIS-ERA5"],
  },
  {
    name: "installedPeakPvPower",
    label: "Installed peak PV power [Wp]",
    type: "number",
  },
  {
    name: "batteryCapacity",
    label: "Battery capacity [Wh]",
    type: "number",
  },
  {
    name: "dischargeCutOffLimit",
    label: "Discharge cut-off limit [%]",
    type: "number",
  },
  {
    name: "consumptionPerDay",
    label: "Consumption per day [Wh]",
    type: "number",
  },
  {
    name: "slope",
    label: "Slope [°]",
    type: "number",
  },
  {
    name: "azimuth",
    label: "Azimuth [°]",
    type: "number",
  },
];

const offGridApiCall = async (data: OffGridApiBody) => {
  const response = await fetch("/api/orodja/pv-sistemi/off-grid", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json.data as OffGridApiResponse;
};

const Form = () => {
  const { marker } = useContext(LocationContext);
  const dispatch = useContext(ApiDispatchContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      if (marker[0] === 0 && marker[1] === 0) {
        toast.error("Najprej izberi lokacijo.");
        return;
      }
      const data = new FormData(e.target as HTMLFormElement);
      offGridApiCall({
        lat: marker[0],
        lon: marker[1],
        raddatabase: data.get("solarRadiationDatabase") as string,
        peakpower: data.get("installedPeakPvPower") as unknown as number,
        batterysize: data.get("batteryCapacity") as unknown as number,
        cutoff: data.get("dischargeCutOffLimit") as unknown as number,
        consumptionday: data.get("consumptionPerDay") as unknown as number,
        angle: data.get("slope") as unknown as number,
        aspect: data.get("azimuth") as unknown as number,
      })
        .then((data) => {
          if (dispatch) dispatch({ type: "SET_OFF_GRID", payload: data });
          toast.success("Uspešno pridobljeni podatki.");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Napaka pri pridobivanju podatkov.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [marker, dispatch]
  );

  return (
    <FormBuilder
      formFields={formFields}
      handleFormSubmit={handleFormSubmit}
      isLoading={isLoading}
    />
  );
};

export default Form;
