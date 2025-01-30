import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export const getDatesGroupedByWeek = (date: string): dayjs.Dayjs[][] => {
  const firstDay = dayjs(date).startOf("month").startOf("week");
  const lastDay = dayjs(date).endOf("month").endOf("week");

  const groupedByWeek: dayjs.Dayjs[][] = [];
  let currentWeek: dayjs.Dayjs[] = [];

  for (
    let day = firstDay;
    day.isBefore(lastDay) || day.isSame(lastDay);
    day = day.add(1, "day")
  ) {
    currentWeek.push(day);

    if (day.day() === 6) {
      groupedByWeek.push(currentWeek);
      currentWeek = [];
    }
  }

  // 마지막 주가 남아 있으면 추가
  if (currentWeek.length > 0) {
    groupedByWeek.push(currentWeek);
  }

  return groupedByWeek;
};
