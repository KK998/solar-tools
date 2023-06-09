"use client";

import InfoCard from "@/app/(components)/Results/InfoCard";
import { OnGridApiResponse } from "@/app/api/orodja/pv-sistemi/on-grid/route";
import { OnGridApiKeys } from "@/app/(utils)/constants";
import { useApi } from "@/app/(services)/useApi";

const createDataPoint = (
  d: OnGridApiResponse,
  key: keyof OnGridApiResponse["outputs"]["totals"]["fixed"]
) => ({
  name: OnGridApiKeys[key],
  value: String(d.outputs.totals.fixed[key]),
});

const Results = () => {
  const { onGrid } = useApi();

  if (onGrid === undefined) return null;

  const keys: (keyof OnGridApiResponse["outputs"]["totals"]["fixed"])[] = [
    "E_d",
    "E_m",
    "E_y",
    "H(i)_d",
    "H(i)_m",
    "H(i)_y",
    "SD_m",
    "SD_y",
    "l_aoi",
    "l_spec",
    "l_tg",
    "l_total",
  ];

  return <InfoCard data={keys.map((key) => createDataPoint(onGrid, key))} />;
};

export default Results;
