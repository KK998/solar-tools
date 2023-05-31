"use client";

import { useContext } from "react";
import { ConfigContext } from "./(utils)/config";
import ToolsAddedTimeline from "./(components)/ToolsAddedTimeline";

const FullPageScrollElements = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col mb-0 flex-grow">{children}</div>;
};

const FullPageContainer = ({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg?: string;
}) => {
  return (
    <div className={`h-[100vh] flex items-center justify-center ${bg && bg}`}>
      {children}
    </div>
  );
};

export default function Home() {
  const { name, mainColor } = useContext(ConfigContext);
  return (
    <FullPageScrollElements>
      <FullPageContainer bg="bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 h-[30vh]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl leading-none text-center md:text-9xl font-black">
            {name.split(" ")[0]}{" "}
            <span style={{ color: mainColor }}>
              {name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
        </div>
      </FullPageContainer>
      <ToolsAddedTimeline />
    </FullPageScrollElements>
  );
}
