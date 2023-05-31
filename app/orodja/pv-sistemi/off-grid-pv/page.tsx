import dynamic from "next/dynamic";

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
  return (
    <>
      <Map />
      <Form />
      <Results />
      <Graph />
    </>
  );
};

export default Page;
