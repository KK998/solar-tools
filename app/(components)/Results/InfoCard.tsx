import React from "react";
import { Card, ListGroup } from "flowbite-react";

type InfoCardProps = {
  data: Array<{
    name: string;
    value: string;
  }>;
};

const InfoCard = ({ data }: InfoCardProps) => {
  return (
    <Card className="flex-grow basis-1/3">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Izračuni
      </h5>
      {data && (
        <ListGroup className="flex-grow mb-auto text-left">
          {data.map((item) => (
            <ListGroup.Item key={item.name}>
              <div className="flex flex-col items-start text-left">
                <span className="mb-1">{item.name}:</span>
                <strong>{item.value}</strong>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
};

export default InfoCard;
