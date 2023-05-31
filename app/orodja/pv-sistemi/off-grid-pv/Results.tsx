import { useContext } from "react";
import InfoCard from "@/app/(components)/Results/InfoCard";
import { ApiContext } from "@/app/(services)/context";

const Results = () => {
  const { offGrid } = useContext(ApiContext);

  if (offGrid === undefined) return null;
  /* const history = offGrid.outputs.histogram.map((v) => ({
    name: "Banan",
    value: String(v.CS_max),
  })); */

  return (
    <InfoCard
      data={[
        {
          name: "Average energy not captured per day [Wh/d]",
          value: String(offGrid.outputs.totals.E_lost),
        },
        {
          name: "Average energy missing per day [Wh/d]",
          value: String(offGrid.outputs.totals.E_miss),
        },
        {
          name: "Number of days used for the calculation [d]",
          value: String(offGrid.outputs.totals.d_total),
        },
        {
          name: "Percentage of days when the battery became empty [%]",
          value: String(offGrid.outputs.totals.f_e),
        },
        {
          name: "Percentage of days when the battery became full [%]",
          value: String(offGrid.outputs.totals.f_f),
        },
        /* ...history, */
      ]}
    />
  );
};

export default Results;
