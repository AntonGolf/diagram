import React from "react";
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
  //длина прямоугольника
  //startData
  //endData
  //вычислить количество дней в этом промежутке и умножить на 80

  //отступ от лев края X
  //startData из массива
  //startData из item
  //вычислить количество дней в этом промежутке и умножить на 80
  //
  let getDayRect = getDayDate(jobListItem.start, jobListItem.end);
  let rectY = index * 65 + 17;
  let rectWidth = getDayRect * 80;

  console.log(rectWidth);

  return <rect x="0" y={rectY} width={rectWidth} height="35"></rect>;
};
