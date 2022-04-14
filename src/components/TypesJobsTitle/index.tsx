import React from "react";
import "./styles.scss";
import cn from "classnames";

type TypesJobsTitleProps = {
  workDays: string;
  title: string;
  className?: string;
};

export const TypesJobsTitle: React.FC<TypesJobsTitleProps> = ({
  workDays,
  title,
  className,
}) => {
  return (
    <div className={cn("jobs-title", className)}>
      <div className="jobs-title__days">{workDays}/дней</div>
      <div className="jobs-title__text">{title}</div>
    </div>
  );
};
