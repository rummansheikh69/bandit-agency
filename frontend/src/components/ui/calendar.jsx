import React, { useState } from "react";
import {
  format,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
} from "date-fns";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Icons for navigation

const CustomCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Example events with specific dates
  const events = [
    { date: new Date(2024, 9, 11), name: "Arts function" },
    { date: new Date(2024, 9, 14), name: "Neon gallery" },
    { date: new Date(2024, 9, 15), name: "Auction" },
    { date: new Date(2024, 9, 19), name: "Auction" },
  ];

  // Render header with arrow navigation icons
  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4">
        <button className=" p-1 hover:bg-zinc-100 rounded">
          <AiOutlineLeft
            onClick={prevMonth}
            className="cursor-pointer h-4 w-4"
          />
        </button>
        <h2 className="text-[16px] font-medium">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button className=" p-1 hover:bg-zinc-100 rounded">
          <AiOutlineRight
            onClick={nextMonth}
            className="cursor-pointer h-4 w-4"
          />
        </button>
      </div>
    );
  };

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Render days of the week with medium font size
  const renderDaysOfWeek = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center font-medium text-sm">
            {day}
          </div>
        ))}
      </div>
    );
  };

  // Render calendar cells with event dots and selected day styling
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;
        const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
        const isEventDay = events.some((event) => isSameDay(event.date, day));
        const isSelected = isSameDay(selectedDate, day);

        days.push(
          <div
            key={day}
            onClick={() => onDateClick(cloneDay)}
            className={`h-8 w-8 p-0 flex justify-center  items-center rounded cursor-pointer ${
              isSelected
                ? "bg-black text-white"
                : isCurrentMonth
                ? "text-gray-900"
                : "text-gray-400"
            }`}
          >
            <div>
              {formattedDate}
              {isEventDay && (
                <span className="block h-1.5 w-1.5 bg-blue-700 rounded-full float-end ml-[2px]"></span>
              )}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const onDateClick = (day) => setSelectedDate(day);

  return (
    <div className="w-72 max-w-md mx-auto p-4 border rounded-lg shadow">
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderCells()}
    </div>
  );
};

export default CustomCalendar;
