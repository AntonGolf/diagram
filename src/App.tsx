import React from "react";
import "./App.css";
import { jobList } from "./data/jobList";
import { TypesJobsTitle } from "./components/TypesJobsTitle/index";
import { SheduleDiagram } from "./components/SheduleDiagram/index";

function App() {
  return (
    <div className="diagram">
      <div className="types-jobs">
        {jobList.map((item) => {
          return (
            <TypesJobsTitle key={item.id} title={item.title} workDays={"1"} />
          );
        })}
      </div>
      <SheduleDiagram jobList={jobList} />

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
              <rect x="0" y="17" width="150" height="35"></rect>
              <rect x="0" y="82" width="180" height="35"></rect>
              <rect x="0" y="147" width="190" height="35"></rect>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default App;
