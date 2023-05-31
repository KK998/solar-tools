"use client";

import InfoCard from "@/app/(components)/Results/InfoCard";
import { ApiContext } from "@/app/(services)/context";
import { useContext, useMemo } from "react";
import type { SevanjeApiResponse } from "@/app/api/orodja/sevanje/(utils)/types";

const numberToMonth = (n: number) => {
  return [
    "Januar",
    "Februar",
    "Marec",
    "April",
    "Maj",
    "Junij",
    "Julij",
    "Avgust",
    "September",
    "Oktober",
    "November",
    "December",
  ][n - 1];
};

type MonthKey = keyof SevanjeApiResponse["outputs"]["monthly"][number];

const createDataPoint = (
  month: SevanjeApiResponse["outputs"]["monthly"][number]
) => {
  let value = [];
  if ("H(h)_m" in month) {
    value.push(`GHI: ${month["H(h)_m"]}kWh/m²`);
  }
  if (("Hb(n)_m" as MonthKey) in month) {
    value.push(`DNR: ${month["Hb(n)_m"]}kWh/m²`);
  }
  if (("H(i_opt)_m" as MonthKey) in month) {
    value.push(`OA: ${month["H(i_opt)_m"]}°`);
  }
  if (("T2m" as MonthKey) in month) {
    value.push(`AT: ${month["T2m"]}℃`);
  }
  return {
    name: `${month.year} - ${numberToMonth(month.month)}`,
    value: value.join(", "),
  };
};

const Results = () => {
  const { sevanje } = useContext(ApiContext);

  const data = useMemo(() => {
    return (
      sevanje?.outputs.monthly.map((month) => createDataPoint(month)) || []
    );
  }, [sevanje]);

  if (sevanje === undefined) return null;

  return <InfoCard data={data} />;
};

export default Results;
