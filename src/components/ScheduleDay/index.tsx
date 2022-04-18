import React from "react";
import "./styles.scss";
import { daysWeeks } from "../../data/daysWeeks";
import { squareWidth } from "./consts";

type ScheduleDayProps = {
  date: string;
  index: number;
};

export const ScheduleDay: React.FC<ScheduleDayProps> = ({ date, index }) => {
  let dayWeekNumb: number = new Date(date).getDay();
  let dayWeekStrind: string = "";
  let numberWeek: number = Number(date.split(" ")[2]);

  daysWeeks.forEach((el, i) => {
    if (i === dayWeekNumb) {
      dayWeekStrind = el;
    }
  });

  let squareX: number = squareWidth * index;
  let squareNumbX: number = squareWidth * index + 15;

  let scheduleWeekend: boolean = false;

  if (dayWeekStrind === "Сб" || dayWeekStrind === "Вс") {
    scheduleWeekend = true;
  }

  return (
    <g
      className={`diagram-shedule__square ${
        scheduleWeekend ? "shedule-weekend" : ""
      }`}
      width="85"
      height="106"
    >
      <text className="diagram-shedule__square--text" y="15" x={squareX}>
        {dayWeekStrind}
      </text>
      <text className="diagram-shedule__square--numb" y="90" x={squareNumbX}>
        {numberWeek}
      </text>
      <rect y="21" x={squareX} width="85" height="85"></rect>
    </g>
  );
};
