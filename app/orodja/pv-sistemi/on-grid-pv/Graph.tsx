"use client";

import { Card, Tabs } from "flowbite-react";
import Chart from "@/app/(components)/Presentation/Chart";
import { ErrorBoundary } from "react-error-boundary";
import { OnGridApiKeys } from "@/app/(utils)/constants";
import { useApi } from "@/app/(services)/useApi";

const monthMapping = {
  1: "Januar",
  2: "Februar",
  3: "Marec",
  4: "April",
  5: "Maj",
  6: "Junij",
  7: "Julij",
  8: "August",
  9: "September",
  10: "Oktober",
  11: "November",
  12: "December",
};

type Month = keyof typeof monthMapping;

const Graph = () => {
  const { onGrid: data } = useApi();

  if (data === undefined) return null;
  return (
    <Card
      className="flex-grow"
      style={{
        flexGrow: 2,
      }}
    >
      <ErrorBoundary fallback={<div>Could not render chart</div>}>
        <Tabs.Group>
          <Tabs.Item active title={OnGridApiKeys["E_d"]}>
            <Chart
              label="Off-grid PV system"
              type="bar"
              data={{
                labels: data.outputs.monthly.fixed.map(
                  ({ month }) => monthMapping[month as Month]
                ),
                datasets: [
                  {
                    label: OnGridApiKeys["E_d"],
                    data: data.outputs.monthly.fixed.map(({ E_d }) => E_d),
                  },
                ],
              }}
            />
          </Tabs.Item>
          <Tabs.Item active title={OnGridApiKeys["E_m"]}>
            <Chart
              label="Off-grid PV system"
              type="bar"
              data={{
                labels: data.outputs.monthly.fixed.map(
                  ({ month }) => monthMapping[month as Month]
                ),
                datasets: [
                  {
                    label: OnGridApiKeys["E_m"],
                    data: data.outputs.monthly.fixed.map(({ E_d }) => E_d),
                  },
                ],
              }}
            />
          </Tabs.Item>
        </Tabs.Group>
      </ErrorBoundary>
    </Card>
  );
};

export default Graph;
