import React from "react";
import { getDayDate } from "../functions/getDayDate";
import { ScheduleRectanglesItem } from "../ScheduleRectanglesItem/index";
import { ScheduleRectanglesLine } from "../ScheduleRectanglesLine";
import { ScheduleRectanglesTick } from "../ScheduleRectanglesTick";
import "./styles.scss";

type ScheduleRectanglesProps = {
  jobList: any;
};

export const ScheduleRectangles: React.FC<ScheduleRectanglesProps> = ({
  jobList,
}) => {
  const sortedDates = jobList
    .flatMap((x: any) => [x.start, x.end])
    .sort((a: any, b: any) => new Date(a).getTime() - new Date(b).getTime());

  const firstDate = sortedDates.length > 0 ? new Date(sortedDates[0]) : null;
  const lastDate =
    sortedDates.length > 0
      ? new Date(sortedDates[sortedDates.length - 1])
      : null;

  const geTAllDays = getDayDate(String(firstDate), String(lastDate));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="diagram__graph"
      height="300"
      width="100%"
    >
      <g className="diagram__grid" fill="transparent">
        <g className="diagram__body">
          <g className="diagram__row-lines">
            {jobList.map((item: any, i: number) => {
              return (
                <ScheduleRectanglesLine
                  numberItem={i}
                  lengthAllItems={geTAllDays.length}
                />
              );
            })}
            <line x="0" y1="0" x2="1000" y2="0"></line>

            <line x="0" y1="134" x2="1000" y2="134"></line>
            <line x="0" y1="201" x2="1000" y2="201"></line>
          </g>
          <g className="diagram__ticks">
            {geTAllDays.map((item: any, i: number) => {
              return (
                <ScheduleRectanglesTick
                  numbItems={i}
                  numberLines={jobList.length}
                />
              );
            })}
          </g>
          <g className="diagram__row">
            {jobList.map((item: any, i: number) => {
              return (
                <ScheduleRectanglesItem
                  jobListItem={item}
                  index={i}
                  startDataMassive={String(firstDate)}
                ></ScheduleRectanglesItem>
              );
            })}
          </g>
        </g>
      </g>
    </svg>
  );
};
