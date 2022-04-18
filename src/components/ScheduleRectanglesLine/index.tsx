import React from "react";
import { rowHeight, squareWidth } from "../../data/consts";
import "./styles.scss";

type ScheduleRectanglesLineProps = {
  numberItem: number;
  lengthAllItems: number;
};

export const ScheduleRectanglesLine: React.FC<ScheduleRectanglesLineProps> = ({
  numberItem,
  lengthAllItems,
}) => {
  const widthX = lengthAllItems * squareWidth;
  const heightY = numberItem * rowHeight;

  return <line x="0" y1={heightY} x2={widthX} y2={heightY}></line>;
};
