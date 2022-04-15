import React from "react";
import { ScheduleRectanglesItem } from "../ScheduleRectanglesItem/index";
import "./styles.scss";

type ScheduleRectanglesProps = {
  jobList: any;
};

export const ScheduleRectangles: React.FC<ScheduleRectanglesProps> = ({
  jobList,
}) => {
  console.log(jobList.length);

  const sortedDates = jobList
    .flatMap((x: any) => [x.start, x.end])
    .sort((a: any, b: any) => new Date(a).getTime() - new Date(b).getTime());

  const firstDate = sortedDates.length > 0 ? new Date(sortedDates[0]) : null;

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
            <line x="0" y1="0" x2="1000" y2="0"></line>
            <line x="0" y1="67" x2="1000" y2="67"></line>
            <line x="0" y1="134" x2="1000" y2="134"></line>
            <line x="0" y1="201" x2="1000" y2="201"></line>
          </g>
          <g className="diagram__ticks">
            <line x1="0" y1="0" x2="0" y2="400"></line>
            <line x1="85" y1="0" x2="85" y2="400"></line>
            <line x1="170" y1="0" x2="170" y2="400"></line>
            <line x1="255" y1="0" x2="255" y2="400"></line>
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

            <rect x="0" y="17" width="150" height="35"></rect>
            <rect x="0" y="82" width="180" height="35"></rect>
            <rect x="0" y="147" width="190" height="35"></rect>
          </g>
        </g>
      </g>
    </svg>
  );
};
