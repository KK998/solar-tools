"use client";
import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";

import { LocationContext } from "@/app/(components)/Location/context";
import FormBuilder, {
  Field,
} from "@/app/(components)/Presentation/FormBuilder";

import { ApiDispatchContext } from "@/app/(services)/context";
import {
  OnGridApiBody,
  OnGridApiResponse,
} from "@/app/api/orodja/pv-sistemi/on-grid/route";

interface FormField extends Field {
  name: keyof OnGridApiBody;
}

const formFields: FormField[] = [
  {
    name: "raddatabase",
    label: "Solar radiation database",
    type: "select",
    options: ["PVGIS-SARAH2", "PVGIS-SARAH", "PVGIS-ERA5"],
  },
  {
    name: "mountingPosition",
    label: "Mounting position",
    type: "select",
    options: ["Free-standing", "Roof added / building integrated"],
  },
  {
    name: "pvtechnology",
    label: "PV technology",
    type: "select",
    options: ["Crystalline silicon", "CIS", "CdTe", "Unknown"],
  },
  {
    name: "installedPeakPvPower",
    label: "Installed peak PV power [Wp]",
    type: "number",
  },
  {
    name: "systemLoss",
    label: "System loss [%]",
    type: "number",
  },
  {
    name: "angle",
    label: "Slope [°]",
    type: "number",
  },
  {
    name: "aspect",
    label: "Azimuth [°]",
    type: "number",
  },
];

const pvTechFormMapping = (value: string) => {
  switch (value) {
    case "Crystalline silicon":
      return "crystSi";
    case "CIS":
      return "CIS";
    case "CdTe":
      return "CdTe";
    default:
      return "Unknown";
  }
};

const mountingFormMapping = (value: string) => {
  switch (value) {
    case "Free-standing":
      return "free";
    default:
      return "building";
  }
};

const onGridApiCall = async (data: OnGridApiBody) => {
  const response = await fetch("/api/orodja/pv-sistemi/on-grid", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return (await response.json()) as OnGridApiResponse;
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
      onGridApiCall({
        lat: marker[0],
        lon: marker[1],
        raddatabase: data.get("raddatabase") as string,
        pvtechnology: pvTechFormMapping(data.get("pvtechnology") as string),
        mountingPosition: mountingFormMapping(
          data.get("mountingPosition") as string
        ),
        systemLoss: parseFloat(data.get("systemLoss") as string),
        installedPeakPvPower: parseFloat(
          data.get("installedPeakPvPower") as string
        ),
        angle: data.get("angle") as unknown as number,
        aspect: data.get("aspect") as unknown as number,
      })
        .then((data) => {
          if (dispatch) {
            dispatch({ type: "SET_ON_GRID", payload: data });
            toast.success("Uspešno pridobljeni podatki.");
          }
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
      isLoading={isLoading}
      handleFormSubmit={handleFormSubmit}
      formFields={formFields}
    />
  );
};

export default Form;
