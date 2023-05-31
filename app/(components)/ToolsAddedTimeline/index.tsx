import Link from "next/link";

import { Button, Card, Timeline } from "flowbite-react";
import HiArrowNarrowRight from "@heroicons/react/24/solid/ArrowRightIcon";
import t from "@/app/(utils)/translate";
import TimelineTime from "./TimelineTime";

const ToolsAddedTimeline = () => (
  <Card className="flex-grow rounded-none">
    <h2 className="text-3xl text-center font-bold my-4">
      {t("changelog_title")}
    </h2>
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <TimelineTime time="5.10.2023" />
          <Timeline.Title>{t("nav_off_grid_pv")}</Timeline.Title>
          <Timeline.Body>{t("changelog_content_one")}</Timeline.Body>
          <Link aria-labelledby="" href="/orodja/pv-sistemi/off-grid-pv">
            <Button color="gray">
              {t("open_tool")}
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Point />
      <Timeline.Item>
        <Timeline.Content>
          <TimelineTime time="5.12.2023" />
          <Timeline.Title>{t("nav_on_grid_pv")}</Timeline.Title>
          <Timeline.Body>{t("changelog_content_two")}</Timeline.Body>
          <Link href="/orodja/pv-sistemi/on-grid-pv">
            <Button color="gray">
              {t("open_tool")}
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content>
          <TimelineTime time="5.22.2023" />
          <Timeline.Title>{t("nav_solar_radiation")}</Timeline.Title>
          <Timeline.Body>{t("changelog_content_three")}</Timeline.Body>
          <Link href="/orodja/sevanje">
            <Button color="gray">
              {t("open_tool")}
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  </Card>
);

export default ToolsAddedTimeline;
