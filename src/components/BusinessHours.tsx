import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface DayHours {
  day: string;
  isOpen: boolean;
  hours: string;
}

const BUSINESS_HOURS: DayHours[] = [
  { day: "Sunday", isOpen: false, hours: "Closed" },
  { day: "Monday", isOpen: true, hours: "9:00 AM - 7:00 PM" },
  { day: "Tuesday", isOpen: true, hours: "9:00 AM - 7:00 PM" },
  { day: "Wednesday", isOpen: true, hours: "9:00 AM - 7:00 PM" },
  { day: "Thursday", isOpen: true, hours: "9:00 AM - 7:00 PM" },
  { day: "Friday", isOpen: true, hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", isOpen: false, hours: "Closed" },
];

export default function BusinessHours() {
  const [hours, setHours] = useState(BUSINESS_HOURS);

  const toggleDay = (index: number) => {
    const updated = [...hours];
    updated[index].isOpen = !updated[index].isOpen;
    setHours(updated);
  };

  return (
    <div className="space-y-3">
      {hours.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-between px-3 py-5 mb-1 ${
            idx !== hours.length - 1 ? "border-b border-gray-200" : ""
          }`}
        >
          <div className="flex items-center gap-3 flex-1">
            {/* Toggle Switch */}
            <button
              onClick={() => toggleDay(idx)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                item.isOpen ? "bg-[#072AC8]" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  item.isOpen ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="font-medium text-gray-900">{item.day}</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm ${
                item.isOpen ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {item.hours}
            </span>
            {item.isOpen && <ChevronRight className="w-5 h-5 text-gray-400" />}
          </div>
        </div>
      ))}
    </div>
  );
}
