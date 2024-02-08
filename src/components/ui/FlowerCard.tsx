import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Indicator } from "./Indicator";
import { TemperatureIcon, HumidityIcon } from "./Icon";

interface FlowerCardProps {
  name: string;
  color: string;
  temperature: number;
  humidity: number;
}

export const FlowerCard: FC<FlowerCardProps> = ({
  name,
  color,
  temperature,
  humidity,
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const src = `/${name.toLocaleLowerCase()}.png`;

  useEffect(() => {
    setImgFailed(false);
  }, [src]);

  return (
    <article className="relative isolate h-[136px] w-full pl-6 flex flex-col justify-center items-start gap-3 overflow-hidden">
      <h2 className="truncate max-w-full">{name}</h2>
      <div className="flex gap-1">
        <Indicator
          icon={<TemperatureIcon className="shrink-0" />}
          value={temperature}
          unit="°C"
          color={color}
        />
        <Indicator
          icon={<HumidityIcon className="shrink-0" />}
          value={humidity}
          unit="%"
          color={color}
        />
      </div>
      {!imgFailed && (
        <Image
          alt={name}
          src={src}
          width={136}
          height={136}
          className="absolute right-0 -z-10"
          onError={() => setImgFailed(true)}
        />
      )}
    </article>
  );
};
