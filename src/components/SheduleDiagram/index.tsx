import React from "react";
import "./styles.scss";
import { diagramDaysHeight } from "./consts";
import moment from "moment";
import { ScheduleDay } from "../ScheduleDay";

type SheduleDiagramProps = {
  jobList: any[];
};

export const SheduleDiagram: React.FC<SheduleDiagramProps> = ({ jobList }) => {
  const sortedDates = jobList
    .flatMap((x) => [x.start, x.end])
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  const firstDate = sortedDates.length > 0 ? new Date(sortedDates[0]) : null;
  const lastDate =
    sortedDates.length > 0
      ? new Date(sortedDates[sortedDates.length - 1])
      : null;

  const dateList: Date[] = [];

  if (firstDate && lastDate) {
    for (
      let i = new Date(firstDate);
      i.getTime() <= lastDate.getTime();
      i = moment(i).add(1, "days").toDate()
    ) {
      dateList.push(i);
    }
  }

  return (
    <div className="diagram-shedule">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={diagramDaysHeight}
        width="100%"
      >
        <g className="diagram-shedule__calendar">
          {dateList.map((item, i) => {
            return <ScheduleDay date={String(item)} index={i} />;
          })}
        </g>
      </svg>
    </div>
  );
};
