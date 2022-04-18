import React from "react";
import { rowHeight, squareWidth } from "../../data/consts";
import "./styles.scss";

type ScheduleRectanglesTickProps = {
  numbItems: number;
  numberLines: number;
};

export const ScheduleRectanglesTick: React.FC<ScheduleRectanglesTickProps> = ({
  numbItems,
  numberLines,
}) => {
  const XhLine = numbItems * squareWidth;
  const YLine = numberLines * rowHeight;

  return <line x1={XhLine} y1="0" x2={XhLine} y2={YLine}></line>;
};
