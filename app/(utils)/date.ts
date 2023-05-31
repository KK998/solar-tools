import { siteConfig } from "@/app/(utils)/config";
import * as dayjs from "dayjs";

import "dayjs/locale/sl";
import "dayjs/locale/en";

dayjs.locale(siteConfig.language);

const formatDate = (date: Date | string) =>
  dayjs.default(date).format("DD.MM.YYYY");

export default formatDate;
