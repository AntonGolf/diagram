import moment from "moment";

export const getDayDate = (firstDate: string, lastDate: string) => {
  let dateList: Date[] = [];

  let lastDateS = new Date(lastDate);

  if (firstDate && lastDate) {
    for (
      let i = new Date(firstDate);
      i.getTime() <= lastDateS.getTime();
      i = moment(i).add(1, "days").toDate()
    ) {
      dateList.push(i);
    }
  }

  return dateList.length;
};
