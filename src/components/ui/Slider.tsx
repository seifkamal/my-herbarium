import { FC, ReactNode } from "react";
import * as Primitive from "@radix-ui/react-slider";
import cn from "classnames";

interface SliderProps {
  max?: number;
  min?: number;
  step?: number;
  defaultValue?: number;
  color?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onValueChange?: (value: number) => void;
  "aria-label"?: string;
}

export const Slider: FC<SliderProps> = ({
  max,
  min,
  step,
  defaultValue,
  color,
  onValueChange,
  iconLeft,
  iconRight,
  "aria-label": ariaLabel,
}) => (
  <form className="flex items-center gap-2">
    {iconLeft}
    <Primitive.Root
      className="w-full h-11 relative flex items-center select-none touch-none"
      defaultValue={[defaultValue ?? 0]}
      max={max}
      min={min}
      step={step}
      onValueChange={(values) => onValueChange?.(values[0])}
    >
      <Primitive.Track className="relative grow rounded-full h-0.5 bg-current">
        <Primitive.Range
          className={cn(
            "absolute rounded-full h-full",
            color === "pink" && "bg-pink-highlight",
            color === "blue" && "bg-blue-highlight",
            color === "green" && "bg-green-highlight"
          )}
        />
      </Primitive.Track>
      <Primitive.Thumb
        className="block w-6 h-6 bg-light shadow-md rounded-full"
        aria-label={ariaLabel}
      />
    </Primitive.Root>
    {iconRight}
  </form>
);
