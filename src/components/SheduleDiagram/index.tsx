import React from "react";
import "./styles.scss";
import { diagramDaysHeight } from "./consts";
import moment from "moment";
import { ScheduleDay } from "../ScheduleDay";
import console from "console";
import { ScheduleMonth } from "../ScheduleMonth";

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

  // let newDate: number = -1;
  let allMonth: any = [];

  // let myMass = dateList.forEach((item,i) => {
  //   let dateR = new Date(item)
  //   if(dateR.getMonth() !== newmas[i]){
  //     newmas.push()
  //   }

  // })

  dateList.forEach((item) => {
    allMonth.push(item.getMonth());
  });

  // const uniqueArray = dateList.getMonth().filter(function(item, pos) {
  //     return a.indexOf(item) == pos;
  // })
  const makeUniq = (arr: any) => {
    return arr.reduce((acc: any, currentValue: any) => {
      acc.indexOf(currentValue) === -1 && acc.push(currentValue);
      return acc;
    }, []);
  };

  let curAllMonth: any = makeUniq(allMonth);

  return (
    <div className="diagram-shedule">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="schedule__month"
        height="70"
        width="100%"
      >
        {curAllMonth.map((item: any) => {
          return (
            <ScheduleMonth
              numbMonth={item}
              sortMassive={dateList}
              startDate={sortedDates[0]}
            />
          );
        })}
      </svg>
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
