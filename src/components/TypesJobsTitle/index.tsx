import React from "react";
import "./styles.scss";
import cn from "classnames";
import { getDayDate } from "../functions/getDayDate";
import { pluralizeDays } from "../functions/pluralizeDays";

type TypesJobsTitleProps = {
  startDate: string;
  endtDate: string;
  title: string;
  className?: string;
};

export const TypesJobsTitle: React.FC<TypesJobsTitleProps> = ({
  startDate,
  endtDate,
  title,
  className,
}) => {
  const lengthDays = getDayDate(startDate, endtDate);
  const measureDays = ["день", "дня", "дней"];
  const titleDays = pluralizeDays(lengthDays.length, measureDays);

  return (
    <div className={cn("jobs-title", className)}>
      <div className="jobs-title__days">{titleDays}</div>
      <div className="jobs-title__text">{title}</div>
    </div>
  );
};
