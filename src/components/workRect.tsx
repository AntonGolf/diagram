import React from "react";

type TypesJobsTitleProps = {
  workDays: string;
  title: string;
};

export const TypesJobsTitle: React.FC<TypesJobsTitleProps> = ({
  workDays,
  title,
}) => {
  return (
    <div className="jobs-title">
      <div className="jobs-title__days">{workDays}/дней</div>
      <div className="jobs-title__text">{title}</div>
    </div>
  );
};
