import React from "react";
import "./styles.scss";
import { daysWeeks } from "../../data/daysWeeks";

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

  console.log(index);
  //   console.log(Date().getDay(date));

  return (
    <g className="diagram-shedule__square" width="85" height="106">
      <text className="diagram-shedule__square--text" y="15" x="0">
        {dayWeekStrind}
      </text>
      <text className="diagram-shedule__square--numb" y="90" x="15">
        {numberWeek}
      </text>
      <rect y="21" x="0" width="85" height="85"></rect>
    </g>
  );
};
