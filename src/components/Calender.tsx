import dayjs from "dayjs";
import { getDatesGroupedByWeek } from "@/lib/calendar";
import "dayjs/locale/ko";

dayjs.locale("ko");

type TCalendar = {
  dueDate: string;
};

const CalendarHeader = ({
  formattedDay,
  formattedTime,
}: {
  formattedDay: string;
  formattedTime: string;
}) => (
  <div className="flex flex-col justify-center text-center">
    <p className="font-CrimsonPro text-2xl text-stone-600 mb-1">
      {formattedDay}
    </p>
    <p>{formattedTime}</p>
  </div>
);

const CalendarTable = ({
  weeklyDateGroups,
  dueDate,
}: {
  weeklyDateGroups: dayjs.Dayjs[][];
  dueDate: string;
}) => (
  <div className="my-8 mx-11 py-8 px-2 border-y border-neutral-200">
    <table className="w-full leading-9">
      <thead>
        <tr>
          <th className="pb-2 text-red-400">일</th>
          <th className="pb-2">월</th>
          <th className="pb-2">화</th>
          <th className="pb-2">수</th>
          <th className="pb-2">목</th>
          <th className="pb-2">금</th>
          <th className="pb-2">토</th>
        </tr>
      </thead>
      <tbody>
        {weeklyDateGroups.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((date, dateIndex) => {
              const isSameMonth = date.month() === dayjs(dueDate).month();
              const isSunday = dayjs(date).day() === 0;
              const isDueDate = dayjs(
                dayjs(dueDate).format("YYYY.MM.DD")
              ).isSame(date);
              const displayDate = isSameMonth ? date.date() : "";

              return (
                <td
                  key={dateIndex}
                  className={`relative ${isSunday ? "text-red-400" : ""} text-center`}
                >
                  {isDueDate ? (
                    <div className="absolute inset-0 flex justify-center items-center size-[30px] bg-stone-400 rounded-full m-auto text-stone-50">
                      {displayDate}
                    </div>
                  ) : (
                    displayDate
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Calendar = ({ dueDate }: TCalendar) => {
  const weeklyDateGroups = getDatesGroupedByWeek(dueDate);
  const formattedDay = dayjs(dueDate).format("YYYY.MM.DD");
  const formattedTime = dayjs(dueDate).format("dddd A h시");
  const remindDate = dayjs(dueDate).diff(dayjs(), "day");

  return (
    <div className="flex flex-col py-12 bg-neutral-50 border-y border-neutral-100 text-stone-500">
      <CalendarHeader
        formattedDay={formattedDay}
        formattedTime={formattedTime}
      />
      <CalendarTable weeklyDateGroups={weeklyDateGroups} dueDate={dueDate} />
      <p className="text-center">
        현욱 ❤️ 유진의 결혼식이&nbsp;
        <span className="text-red-400">{remindDate}일</span> 남았습니다.
      </p>
    </div>
  );
};
