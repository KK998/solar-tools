"use client";
import dynamic from "next/dynamic";
import { useContext } from "react";
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

const Page = () => {
  const { offGrid } = useContext(ApiContext);
  return (
    <>
      <Map />
      <Form />
      {offGrid && <Results />}
    </>
  );
};

export default Page;
