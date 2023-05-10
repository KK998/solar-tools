"use client";
import {
  OffGridApiBody,
  OffGridApiResponse,
} from "@/app/api/orodja/pv-sistemi/route";
import { LocationContext } from "@/components/Location/context";
import {
  Button,
  Card,
  Label,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import { useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ApiDispatchContext } from "../../layout";

interface FormNames {
  solarRadiationDatabase: string;
  installedPeakPvPower: number;
  batteryCapacity: number;
  dischargeCutOffLimit: number;
  consumptionPerDay: number;
  slope: number;
  azimuth: number;
}

type FormField = {
  name: keyof FormNames;
  label: string;
  type: "number" | "select";
  options?: string[];
};

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
  const response = await fetch("/api/orodja/pv-sistemi", {
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
      if (!marker) {
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
    <Card className="flex-grow">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        {formFields.map((field) =>
          field.type === "number" ? (
            <div key={field.name}>
              <div className="mb-2 block">
                <Label htmlFor={field.name} value={field.label} />
              </div>
              <TextInput
                id={field.name}
                name={field.name}
                type="number"
                required
              />
            </div>
          ) : (
            <div key={field.name}>
              <div className="mb-2 block">
                <Label htmlFor={field.name} value={field.label} />
              </div>
              <Select id={field.name} name={field.name} required>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
          )
        )}
        <Button type="submit">
          {isLoading && (
            <Spinner
              size="sm"
              className="mr-1"
              aria-label="Izračuni se nalagajo..."
            />
          )}
          Izračunaj
        </Button>
      </form>
    </Card>
  );
};

export default Form;
