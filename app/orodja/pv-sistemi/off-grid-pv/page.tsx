"use client";
import dynamic from "next/dynamic";
import { useContext, useMemo } from "react";
import { ApiContext } from "../../layout";

const Map = dynamic(() => import("@/components/Location/Map"), {
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
  const { offGrid } = useContext(ApiContext);

  const graphData = useMemo(() => {
    return offGrid;
  }, [offGrid]);

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
