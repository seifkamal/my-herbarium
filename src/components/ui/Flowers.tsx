"use client";

import { useState, type FC } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import cn from "classnames";
import { FlowerCard } from "./FlowerCard";
import { FlowerMenu } from "./FlowerMenu";

export interface IFlower {
  id: string;
  name: string;
  color: string;
  temperature: number;
  humidity: number;
  description: string;
}

interface FlowersProps {
  flowers: IFlower[];
}

export const Flowers: FC<FlowersProps> = ({ flowers }) => (
  <Accordion.Root type="single" className="flex flex-col gap-4" collapsible>
    {flowers.map((flower) => (
      <Flower key={flower.id} flower={flower} />
    ))}
  </Accordion.Root>
);

interface FlowerProps {
  flower: IFlower;
  simple?: boolean;
}

const Flower: FC<FlowerProps> = ({ flower, simple = false }) => {
  const { id, name, description, color } = flower;
  const [temperature, setTemperature] = useState(flower.temperature);
  const [humidity, setHumidity] = useState(flower.humidity);
  return (
    <Accordion.AccordionItem
      value={id}
      className={cn(
        "rounded-2xl",
        color === "pink" &&
          "text-pink-dark bg-pink-light dark:text-pink-light dark:bg-pink-dark",
        color === "blue" &&
          "text-blue-dark bg-blue-light dark:text-blue-light dark:bg-blue-dark",
        color === "green" &&
          "text-green-dark bg-green-light dark:text-green-light dark:bg-green-dark"
      )}
    >
      <Accordion.AccordionTrigger className="w-full">
        <FlowerCard
          name={name}
          color={color}
          temperature={temperature}
          humidity={humidity}
        />
      </Accordion.AccordionTrigger>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <FlowerMenu
          color={color}
          simple={simple}
          description={description}
          defaultTemperature={temperature}
          onTemperatureChange={setTemperature}
          defaultHumidity={humidity}
          onHumidityChange={setHumidity}
        />
      </Accordion.Content>
    </Accordion.AccordionItem>
  );
};
