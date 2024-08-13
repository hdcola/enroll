import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { PressEvent } from "@react-types/shared";

interface CardProps {
  title: string;
  description: string;
  onPress?: (e: PressEvent) => void | undefined;
}

const BootCampCard: React.FC<CardProps> = ({
  title,
  description,
  onPress = undefined,
}) => {
  return (
    <Card>
      <CardHeader>
        <h2>{title}</h2>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <CardFooter>
        <Button
          className="text-tiny"
          color="primary"
          radius="full"
          onPress={onPress}
        >
          立即参与
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BootCampCard;
