import { screen, cleanup, render } from "@testing-library/react";
import { MockApiProvider } from "@/services/Provider";

import { OffGridPrint, OnGridPrint, SevanjePrint } from "./Print";

type TestTableRenderProps = {
  testName: string;
  Component: React.ReactElement;
  numberOfTableRows?: number;
};

const TestTableRender = ({
  testName,
  Component,
  numberOfTableRows = 12,
}: TestTableRenderProps) => {
  describe(testName, () => {
    beforeEach(() => {
      render(<MockApiProvider>{Component}</MockApiProvider>);
    });
    afterEach(cleanup);
    test("Renders a table component", async () => {
      const table = await screen.findByRole("table");
      expect(table).toBeInTheDocument();
    });

    test(`Table displays ${numberOfTableRows} rows`, async () => {
      const table = await screen.findByRole("table");
      const rows = table.querySelectorAll("tbody > tr");
      expect(rows).toHaveLength(numberOfTableRows);
    });
  });
};

describe("Print", () => {
  TestTableRender({
    testName: "On Grid",
    Component: <OnGridPrint />,
  });

  TestTableRender({
    testName: "Off Grid",
    Component: <OffGridPrint />,
  });

  TestTableRender({
    testName: "Sevanje",
    Component: <SevanjePrint />,
    numberOfTableRows: 0,
  });
});
