import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 1));
  const [selectedDate, setSelectedDate] = useState(24);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const prevMonthDays = new Date(year, month, 0).getDate();

  // Fill previous month *visible* days
  const prevDays = Array.from(
    { length: firstDayIndex },
    (_, i) => prevMonthDays - firstDayIndex + i + 1
  );

  // Current month days
  const currentDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const totalRendered = prevDays.length + currentDays.length;
  const nextDaysCount = 42 - totalRendered; // Full 6-row calendar

  const nextDays = Array.from({ length: nextDaysCount }, (_, i) => i + 1);

  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));

  const monthLabel = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-[#F9FAFC] rounded-2xl p-6 w-full">
      {/* Month Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">{monthLabel}</h2>
        <div className="flex gap-3">
          <button onClick={prevMonth} className="p-1 rounded hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button onClick={nextMonth} className="p-1 rounded hover:bg-gray-100">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-4">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-sm">
        {/* Previous month's days (gray) */}
        {prevDays.map((day, i) => (
          <div
            key={`p-${i}`}
            className="flex items-center justify-center text-gray-400"
          >
            {day}
          </div>
        ))}

        {/* Current month */}
        {currentDays.map((day, i) => {
          const isSelected = day === selectedDate;
          const isOutlined = day === 22; // from screenshot

          return (
            <button
              key={`c-${i}`}
              onClick={() => setSelectedDate(day)}
              className="flex items-center justify-center relative aspect-square"
            >
              {/* Filled blue circle (24) */}
              {isSelected && (
                <div className="absolute w-9 h-9 bg-[#072AC8] rounded-full" />
              )}

              {/* Outlined circle (22) */}
              {isOutlined && !isSelected && (
                <div className="absolute w-9 h-9 rounded-full border border-black" />
              )}

              <span
                className={`z-10 ${
                  isSelected
                    ? "text-white font-semibold"
                    : isOutlined
                    ? "text-black font-semibold"
                    : "text-gray-800"
                }`}
              >
                {day}
              </span>
            </button>
          );
        })}

        {/* Next month days (gray) */}
        {nextDays.map((day, i) => (
          <div
            key={`n-${i}`}
            className="flex items-center justify-center text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
