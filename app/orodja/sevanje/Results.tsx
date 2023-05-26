"use client";

import InfoCard from "@/components/Results/InfoCard";
import { ApiContext } from "@/services/context";
import { useContext } from "react";
import type { SevanjeApiResponse } from "@/app/api/orodja/sevanje/(utils)/types";

const createDataPoint = (
  d: SevanjeApiResponse,
  key: keyof SevanjeApiResponse["outputs"]
) => ({
  name: "Banana",
  value: String(d.outputs),
});

const Results = () => {
  const { sevanje } = useContext(ApiContext);

  if (sevanje === undefined) return null;

  const keys: (keyof SevanjeApiResponse["outputs"])[] = [];

  return <InfoCard data={keys.map((key) => createDataPoint(sevanje, key))} />;
};

export default Results;
