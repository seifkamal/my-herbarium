import { FC } from "react";
import { Flowers, IFlower } from "../ui/Flowers";

interface HomePageProps {
  flowers: IFlower[];
}

export const HomePage: FC<HomePageProps> = ({ flowers }) => {
  return (
    <main className="max-w-prose mx-auto px-4 pb-2 pt-[124px] flex flex-col gap-4">
      <h1>Your Herbarium</h1>
      <Flowers flowers={flowers} />
    </main>
  );
};
