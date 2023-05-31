"use client";
import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";

import { LocationContext } from "@/app/(components)/Location/context";
import FormBuilder, {
  Field,
} from "@/app/(components)/Presentation/FormBuilder";

import { ApiDispatchContext } from "@/app/(services)/context";
import type {
  SevanjeApiBody,
  SevanjeApiResponse,
} from "@/app/api/orodja/sevanje/(utils)/types";

interface FormField extends Field {
  name: keyof SevanjeApiBody;
}

export const formFields: FormField[] = [
  {
    name: "raddatabase",
    label: "Solar radiation database",
    type: "select",
    options: ["PVGIS-SARAH2", "PVGIS-SARAH", "PVGIS-ERA5"],
  },
  {
    name: "startyear",
    label: "Start year",
    type: "select",
    options: Array.from({ length: 18 }, (_, i) => `${2005 + i}`),
  },
  {
    name: "endyear",
    label: "End year",
    type: "select",
    options: Array.from({ length: 18 }, (_, i) => `${2005 + i}`),
  },
  {
    name: "horirrad",
    label: "Global horizontal irradiation [kWh/m²]",
    type: "boolean",
  },
  {
    name: "optrad",
    label: "Direct normal irradiation [kWh/m²]",
    type: "boolean",
  },
  {
    name: "mr_dni",
    label: "Global irradiation optimum angle",
    type: "boolean",
  },
  {
    name: "avtemp",
    label: "Average temperature",
    type: "boolean",
  },
];

const sevanjeApiCall = async (data: SevanjeApiBody) => {
  const response = await fetch("/api/orodja/sevanje", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return (await response.json()) as SevanjeApiResponse;
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
      sevanjeApiCall({
        lat: marker[0],
        lon: marker[1],
        raddatabase: data.get("raddatabase") as string,
        startyear: data.get("startyear") as string,
        endyear: data.get("endyear") as string,
        horirrad: !!data.get("horirrad") as boolean,
        optrad: !!data.get("optrad") as boolean,
        mr_dni: !!data.get("mr_dni") as boolean,
        avtemp: !!data.get("avtemp") as boolean,
      })
        .then((data) => {
          if (dispatch) {
            dispatch({ type: "SET_SEVANJE", payload: data });
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
