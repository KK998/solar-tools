import { Card, Tabs } from "flowbite-react";
import { OffGridApiResponse } from "@/app/api/orodja/pv-sistemi/off-grid/route";
import Chart from "@/app/(components)/Presentation/Chart";

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

const Graph = ({ data }: { data: OffGridApiResponse }) => {
  return (
    <Card className="flex-grow">
      <Tabs.Group>
        <Tabs.Item active title="Average energy not captured per day [Wh/d]">
          <Chart
            label="Off-grid PV system"
            type="bar"
            data={{
              labels: data.outputs.monthly.map(
                ({ month }) => monthMapping[month as Month]
              ),
              datasets: [
                {
                  label: "Average energy not captured per day [Wh/d]",
                  data: data.outputs.monthly.map(({ E_lost_d }) => E_lost_d),
                },
              ],
            }}
          />
        </Tabs.Item>
        <Tabs.Item title="Average energy production per day [Wh/d]">
          <Chart
            label="Off-grid PV system"
            type="bar"
            data={{
              labels: data.outputs.monthly.map(
                ({ month }) => monthMapping[month as Month]
              ),
              datasets: [
                {
                  label: "Average energy production per day [Wh/d]",
                  data: data.outputs.monthly.map(({ E_d }) => E_d),
                },
              ],
            }}
          />
        </Tabs.Item>
        <Tabs.Item title="Percentage of days when the battery became empty [%]">
          <Chart
            label="Off-grid PV system"
            type="bar"
            data={{
              labels: data.outputs.monthly.map(
                ({ month }) => monthMapping[month as Month]
              ),
              datasets: [
                {
                  label: "Percentage of days when the battery became empty [%]",
                  data: data.outputs.monthly.map(({ f_e }) => f_e),
                },
              ],
            }}
          />
        </Tabs.Item>
        <Tabs.Item title="Percentage of days when the battery became full [%]">
          <Chart
            label="Off-grid PV system"
            type="bar"
            data={{
              labels: data.outputs.monthly.map(
                ({ month }) => monthMapping[month as Month]
              ),
              datasets: [
                {
                  label: "Percentage of days when the battery became full [%]",
                  data: data.outputs.monthly.map(({ f_f }) => f_f),
                },
              ],
            }}
          />
        </Tabs.Item>
      </Tabs.Group>
    </Card>
  );
};

export default Graph;
