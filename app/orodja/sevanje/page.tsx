import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("@/components/Location/Map"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <Map />
    </>
  );
};

export default Page;
