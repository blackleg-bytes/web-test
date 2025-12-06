import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TIMES = [
  "12:00 AM",
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
  "4:00 AM",
  "5:00 AM",
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
];

interface Props {
  value: string;
  onChange: (newTime: string) => void;
}

export default function TimeSelector({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-36">
      <button
        className="w-full bg-white border border-gray-300 text-black 
                   rounded-xl px-4 py-2 flex items-center justify-between 
                   text-sm font-medium shadow-sm"
        onClick={() => setOpen(!open)}
      >
        {value}
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 
                        rounded-lg shadow-lg max-h-48 overflow-y-auto z-20"
        >
          {TIMES.map((t) => (
            <div
              key={t}
              onClick={() => {
                onChange(t);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 ${
                t === value ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
