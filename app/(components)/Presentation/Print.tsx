import { useApi } from "@/app/(services)/useApi";
import { Table } from "flowbite-react";
import React, { ReactElement } from "react";

type PrintProps = {
  images: ReactElement[];
};

export const OnGridPrint = () => {
  const { onGrid } = useApi();
  if (!onGrid) return null;
  return (
    <>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Mesec</Table.HeadCell>
          <Table.HeadCell>E_d</Table.HeadCell>
          <Table.HeadCell>E_m</Table.HeadCell>
          <Table.HeadCell>H(i)_d</Table.HeadCell>
          <Table.HeadCell>H(i)_m</Table.HeadCell>
          <Table.HeadCell>SD_m</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {onGrid.outputs.monthly.fixed.map((row) => (
            <Table.Row key={`${row.month}-${row.E_d}`}>
              <Table.Cell>{row.month}</Table.Cell>
              <Table.Cell>{row.E_d}</Table.Cell>
              <Table.Cell>{row.E_m}</Table.Cell>
              <Table.Cell>{row["H(i)_d"]}</Table.Cell>
              <Table.Cell>{row["H(i)_m"]}</Table.Cell>
              <Table.Cell>{row.SD_m}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <br />
    </>
  );
};

export const OffGridPrint = () => {
  const { offGrid } = useApi();
  if (!offGrid) return null;
  return (
    <>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Mesec</Table.HeadCell>
          <Table.HeadCell>E_d</Table.HeadCell>
          <Table.HeadCell>E_lost_d</Table.HeadCell>
          <Table.HeadCell>f_e</Table.HeadCell>
          <Table.HeadCell>f_f</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {offGrid.outputs.monthly.map((row) => (
            <Table.Row key={`${row.month}-${row.E_d}`}>
              <Table.Cell>{row.month}</Table.Cell>
              <Table.Cell>{row.E_d}</Table.Cell>
              <Table.Cell>{row.E_lost_d}</Table.Cell>
              <Table.Cell>{row.f_e}</Table.Cell>
              <Table.Cell>{row.f_f}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <br />
    </>
  );
};

export const SevanjePrint = () => {
  const { sevanje } = useApi();

  if (!sevanje) return null;

  return (
    <>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Mesec</Table.HeadCell>
          <Table.HeadCell>1</Table.HeadCell>
          <Table.HeadCell>2</Table.HeadCell>
          <Table.HeadCell>3</Table.HeadCell>
          <Table.HeadCell>4</Table.HeadCell>
        </Table.Head>
        <Table.Body>{JSON.stringify(sevanje.outputs)}</Table.Body>
      </Table>
      <br />
    </>
  );
};

const Print = ({ images }: PrintProps) => {
  return (
    <div>
      <OnGridPrint />
      <OffGridPrint />
      <SevanjePrint />
      <div>{images}</div>
    </div>
  );
};

export default Print;
