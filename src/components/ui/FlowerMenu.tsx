import { FC } from "react";
import cn from "classnames";
import { Slider } from "./Slider";
import { SunSlashIcon, SunIcon, WaterSlashIcon, WaterIcon } from "./Icon";

interface FlowerMenuProps {
  color: string;
  description: string;
  simple?: boolean;
  defaultTemperature?: number;
  onTemperatureChange(value: number): void;
  defaultHumidity?: number;
  onHumidityChange(value: number): void;
}

export const FlowerMenu: FC<FlowerMenuProps> = ({
  color,
  description,
  simple,
  defaultTemperature,
  onTemperatureChange,
  defaultHumidity,
  onHumidityChange,
}) => (
  <div
    className={cn(
      "isolate h-32 px-6 rounded-b-2xl relative flex flex-col justify-center after:absolute after:pointer-events-none after:inset-0 after:-z-10 after:rounded-inherit after:bg-light/20 dark:text-light dark:after:bg-transparent",
      color === "pink" &&
        "text-pink-dark bg-pink-extraLight dark:bg-pink-medium",
      color === "blue" &&
        "text-blue-dark bg-blue-extraLight dark:bg-blue-medium",
      color === "green" &&
        "text-green-dark bg-green-extraLight dark:bg-green-medium"
    )}
  >
    {simple ? (
      <p>{description}</p>
    ) : (
      <div className="flex flex-col justify-center gap-2">
        <Slider
          min={0}
          max={100}
          step={0.5}
          defaultValue={defaultTemperature}
          color={color}
          onValueChange={onTemperatureChange}
          iconLeft={<SunSlashIcon className="shrink-0" />}
          iconRight={<SunIcon className="shrink-0" />}
          aria-label="Temperature"
        />
        <Slider
          min={0}
          max={100}
          step={0.5}
          defaultValue={defaultHumidity}
          color={color}
          onValueChange={onHumidityChange}
          iconLeft={<WaterSlashIcon className="shrink-0" />}
          iconRight={<WaterIcon className="shrink-0" />}
          aria-label="Humidity"
        />
      </div>
    )}
  </div>
);
