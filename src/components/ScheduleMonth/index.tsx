import React from "react";
import { squareWidth } from "../../data/consts";
import { dateMonths } from "../../data/dateMonths";
import { getDayDate } from "../functions/getDayDate";
import "./styles.scss";

type ScheduleMonthProps = {
  numbMonth: number;
  sortMassive: any;
  startDate: any;
};

export const ScheduleMonth: React.FC<ScheduleMonthProps> = ({
  numbMonth,
  sortMassive,
  startDate,
}) => {
  let textValue: string = "";
  let sortMounth: any[] = [];

  dateMonths.forEach((item, i) => {
    if (i === numbMonth) {
      textValue = item;
    }
  });
  sortMassive.forEach((item: any) => {
    let sortNumbMonth = new Date(item).getMonth();
    if (sortNumbMonth === numbMonth) {
      sortMounth.push(item);
    }
  });

  let getDateCount = getDayDate(startDate, sortMounth[0]);
  let widthMonth = (getDateCount.length - 1) * squareWidth;

  return (
    <text y={"45"} x={widthMonth}>
      {textValue}
    </text>
  );
};
