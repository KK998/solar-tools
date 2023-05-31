import { Button, Timeline } from "flowbite-react";
import TimelineTime from "./TimelineTime";
import Link from "next/link";
import t from "@/app/(utils)/translate";
import HiArrowNarrowRight from "@heroicons/react/24/solid/ArrowRightIcon";

type TimelineItemProps = {
  time: string;
  title: string;
  body?: string;
  link?: string;
};

const TimelineItem = ({ time, title, body, link }: TimelineItemProps) => {
  return (
    <Timeline.Item aria-labelledby="timeline_item">
      <Timeline.Point />
      <Timeline.Content>
        <TimelineTime time={time} />
        <Timeline.Title>{t(title)}</Timeline.Title>
        {body && <Timeline.Body>{t(body)}</Timeline.Body>}
        {link && (
          <Link role="link" aria-label="timeline_item_link" href={link}>
            <Button color="gray">
              {t("open_tool")}
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        )}
      </Timeline.Content>
    </Timeline.Item>
  );
};

export default TimelineItem;
