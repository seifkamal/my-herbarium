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
    <article className="h-[136px] w-full pl-6 flex justify-center items-center">
      <div className="grow flex flex-col items-start gap-3 overflow-hidden">
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
      </div>
      {!imgFailed && (
        <Image
          alt={name}
          src={src}
          width={136}
          height={136}
          className="shrink-0"
          onError={() => setImgFailed(true)}
        />
      )}
    </article>
  );
};
