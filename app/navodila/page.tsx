import Link from "next/link";
const page = () => {
  return (
    <main className="flex items-center flex-col justify-center p-20">
      <h1 className="font-bold text-5xl text-center">WIP</h1>
      <Link
        className="bg-gray-900 mx-auto my-5 text-center px-10 py-4 rounded-lg hover:shadow hover:bg-gray-800 transition-all text-lg"
        href="https://joint-research-centre.ec.europa.eu/pvgis-online-tool/getting-started-pvgis/pvgis-user-manual_en"
        target="_blank"
      >
        See the source manual here
      </Link>
    </main>
  );
};

export default page;
