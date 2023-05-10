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
    <Card className="flex-grow">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Izračuni
      </h5>
      {data && (
        <ListGroup className="flex-grow mb-auto">
          {data.map((item) => (
            <ListGroup.Item key={item.name}>
              <span className="font-bold">{item.name}</span>: {item.value}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  );
};

export default InfoCard;
