"use client";

import { ApiContext } from "@/app/(services)/context";
import dynamic from "next/dynamic";
import { useContext, useMemo } from "react";

const Map = dynamic(() => import("@/app/(components)/Location/Map"), {
  ssr: false,
});

const Form = dynamic(() => import("./Form"), {
  ssr: false,
});

const Results = dynamic(() => import("./Results"), {
  ssr: false,
});

const Graph = dynamic(() => import("./Graph"), {
  ssr: false,
});

const Page = () => {
  const { onGrid } = useContext(ApiContext);

  const graphData = useMemo(() => {
    return onGrid;
  }, [onGrid]);

  return (
    <>
      <Map />
      <Form />
      {graphData && <Results />}
      {graphData && <Graph data={graphData} />}
    </>
  );
};

export default Page;
