import formatDate from "@/app/(utils)/date";
import { Timeline } from "flowbite-react";

const TimelineTime = ({ time }: { time: string }) => {
  return <Timeline.Time>{formatDate(new Date(time))}</Timeline.Time>;
};

export default TimelineTime;
