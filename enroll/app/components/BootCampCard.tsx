import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

interface CardProps {
  title: string;
  description: string;
}

const BootCampCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        <h2>{title}</h2>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <CardFooter>
        <Button className="text-tiny" color="primary" radius="full">
          立即参与
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BootCampCard;
