"use client";

import { Button, Card, Timeline } from "flowbite-react";
import HiArrowNarrowRight from "@heroicons/react/24/solid/ArrowRightIcon";
import Link from "next/link";
import { useContext } from "react";
import { ConfigContext } from "./config";
import Image from "next/image";

const ToolsAddedTimeline = () => (
  <Card className="mt-10 container mx-auto">
    <h2 className="text-3xl text-center font-bold my-4">Zgodovina spremeb</h2>
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Maj 2023</Timeline.Time>
          <Timeline.Title>On-Grid PV-Sistemi</Timeline.Title>
          <Timeline.Body>
            Dodali novo orodje za informativne izračune pv sistemov, ki niso
            priključeni na omrežje.
          </Timeline.Body>
          <Link href="/orodja/pv-sistemi/off-grid-pv">
            <Button color="gray">
              Odpri orodje
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Point />
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Time>Maj 2023</Timeline.Time>
          <Timeline.Title>On-Grid PV-Sistemi</Timeline.Title>
          <Timeline.Body>
            Dodali novo orodje za informativne izračune pv sistemov, ki so
            priključeni na omrežje.
          </Timeline.Body>
          <Link href="/orodja/pv-sistemi/on-grid-pv">
            <Button color="gray">
              Odpri orodje
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  </Card>
);

const FullPageScrollElements = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
    </div>
  );
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
  const { logo, name, mainColor } = useContext(ConfigContext);
  return (
    <FullPageScrollElements>
      <FullPageContainer bg="bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400">
        <div className="flex flex-col gap-10 justify-center items-center">
          <Image
            src={logo}
            alt={name}
            width={100}
            height={100}
            className="object-contain"
          />
          <h1 className="text-7xl text-center md:text-9xl font-black">
            {name.split(" ")[0]}{" "}
            <span style={{ color: mainColor }}>
              {name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
        </div>
      </FullPageContainer>
      <FullPageContainer bg="bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400">
        <ToolsAddedTimeline />
      </FullPageContainer>
    </FullPageScrollElements>
  );
}
