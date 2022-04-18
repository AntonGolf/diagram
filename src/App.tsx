import React from "react";
import "./App.css";
import { jobList } from "./data/jobList";
import { TypesJobsTitle } from "./components/TypesJobsTitle/index";
import { SheduleDiagram } from "./components/SheduleDiagram/index";
import { ScheduleRectangles } from "./components/ScheduleRectangles";
import { getDayDate } from "./components/functions/getDayDate";
import { squareWidth } from "./data/consts";

function App() {
  const sortedDates = jobList
    .flatMap((x) => [x.start, x.end])
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  const firstDate = sortedDates.length > 0 ? new Date(sortedDates[0]) : null;
  const lastDate =
    sortedDates.length > 0
      ? new Date(sortedDates[sortedDates.length - 1])
      : null;

  let getAllDays = getDayDate(String(firstDate), String(lastDate));
  let getWidthDiagramInner = squareWidth * getAllDays.length;

  const listStylus: React.CSSProperties = {
    width: getWidthDiagramInner,
  };

  return (
    <div className="diagram">
      <div className="types-jobs">
        {jobList.map((item) => {
          return (
            <TypesJobsTitle
              key={item.id}
              title={item.title}
              startDate={item.start}
              endtDate={item.end}
            />
          );
        })}
      </div>
      <div className="diagram__wrapper">
        <div className="diagram__inner" style={listStylus}>
          <SheduleDiagram jobList={jobList} />
          <ScheduleRectangles jobList={jobList} />
        </div>
      </div>
    </div>
  );
}

export default App;
