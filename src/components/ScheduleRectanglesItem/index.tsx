import React from "react";
import { squareWidth } from "../../data/consts";
import { getDayDate } from "../functions/getDayDate";
import "./styles.scss";

type ScheduleRectanglesItemProps = {
  jobListItem: any;
  index: number;
  startDataMassive: string;
};

export const ScheduleRectanglesItem: React.FC<ScheduleRectanglesItemProps> = ({
  jobListItem,
  index,
  startDataMassive,
}) => {
  let getDayRect = getDayDate(jobListItem.start, jobListItem.end);
  let getDayRectWidth = getDayDate(startDataMassive, jobListItem.start);
  let rectY = index * 65 + 17;
  let rectWidth = getDayRect.length * squareWidth;
  let rectPaddingLeft = (getDayRectWidth.length - 1) * squareWidth;

  let rectColor: any;

  jobListItem.color.length > 0
    ? (rectColor = jobListItem.color)
    : (rectColor = "#" + Math.floor(Math.random() * 16777215).toString(16));

  return (
    <rect
      x={rectPaddingLeft}
      y={rectY}
      fill={rectColor}
      width={rectWidth}
      height="35"
    ></rect>
  );
};
