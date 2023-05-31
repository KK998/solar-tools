import Link from "next/link";

import { Button, Card, Timeline } from "flowbite-react";
import HiArrowNarrowRight from "@heroicons/react/24/solid/ArrowRightIcon";

const ToolsAddedTimeline = () => (
  <Card className="flex-grow rounded-none">
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
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Time>Maj 2023</Timeline.Time>
          <Timeline.Title>Sevanje</Timeline.Title>
          <Timeline.Body>
            Dodali novo orodje za informativni prikaz sevanja na območju.
          </Timeline.Body>
          <Link href="/orodja/sevanje">
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

export default ToolsAddedTimeline;
