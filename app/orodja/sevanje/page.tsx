import dynamic from "next/dynamic";
import React from "react";

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
  return (
    <>
      <Map />
      <Form />
      <Results />
    </>
  );
};

export default Page;
