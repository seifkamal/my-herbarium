import cn from "classnames";
import { FC, ReactNode } from "react";

interface IndicatorProps {
  icon: ReactNode;
  value: number;
  unit: string;
  color: string;
}

export const Indicator: FC<IndicatorProps> = ({ icon, value, unit, color }) => (
  <article
    className={cn(
      "flex items-center gap-0.5 rounded-lg p-1 pr-2.5",
      color === "pink" &&
        "text-pink-dark bg-pink-1/10 dark:text-pink-light dark:bg-pink-medium",
      color === "blue" &&
        "text-blue-dark bg-blue-1/10 dark:text-blue-light dark:bg-blue-medium",
      color === "green" &&
        "text-green-dark bg-green-1/10 dark:text-green-light dark:bg-green-medium"
    )}
  >
    {icon}
    <span className="text-sm leading-4 font-semibold">
      {value.toFixed(1)}
      {unit}
    </span>
  </article>
);
