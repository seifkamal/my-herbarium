import { FC } from "react";

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
  <ol>
    {flowers.map((flower) => (
      <li key={flower.id}>{flower.name}</li>
    ))}
  </ol>
);
