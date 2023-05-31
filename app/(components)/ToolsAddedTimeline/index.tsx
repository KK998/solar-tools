import { Card, Timeline } from "flowbite-react";
import TimelineItem from "./TimelineItem";
import t from "@/app/(utils)/translate";

const ToolsAddedTimeline = () => (
  <Card className="flex-grow rounded-none">
    <h2 className="text-3xl text-center font-bold my-4">
      {t("changelog_title")}
    </h2>
    <Timeline>
      <TimelineItem
        title="nav_off_grid_pv"
        body="changelog_content_1"
        link="/orodja/pv-sistemi/off-grid-pv"
        time="5.10.2023"
      />
      <Timeline.Point />
      <TimelineItem
        title="nav_on_grid_pv"
        body="changelog_content_2"
        link="/orodja/pv-sistemi/on-grid-pv"
        time="5.12.2023"
      />
      <Timeline.Point />
      <TimelineItem
        title="nav_solar_radiation"
        body="changelog_content_3"
        link="/orodja/sevanje"
        time="5.22.2023"
      />
      <Timeline.Point />
      <TimelineItem
        title="translations"
        body="changelog_content_4"
        time="5.31.2023"
      />
    </Timeline>
  </Card>
);

export default ToolsAddedTimeline;
