import { useEffect, useState } from "react";

export default function useDate(events, nav) {
  const [days, setDays] = useState([]);
  const [dateDisplay, setDateDisplay] = useState("");

  useEffect(() => {
    const eventForday = (date) => events.find((e) => e.date === date);
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date();

    if (nav !== 0) {
      date.setMonth(new Date().getMonth() + nav);
    }
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    console.log(firstDayOfMonth);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(daysInMonth);
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    console.log(dateString);
    const paddedDays = weekdays.indexOf(dateString.split(", ")[0]);
    console.log(paddedDays);
    const monthStr =
      firstDayOfMonth.toLocaleDateString("en-us", { month: "long" }) +
      ", " +
      year;
    setDateDisplay(monthStr);

    const daysArr = [];

    for (let i = 1; i <= paddedDays + daysInMonth; i++) {
      const dayString = `${i - paddedDays}/${month + 1}/${year}`;

      if (i > paddedDays) {
        daysArr.push({
          value: i - paddedDays,
          event: eventForday(dayString),
          isCurrentDay: i - paddedDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "padding",
          event: null,
          isCurrentDay: false,
          date: "",
        });
      }
    }

    setDays(daysArr);
  }, [events, nav]);

  return [days, dateDisplay];
}
