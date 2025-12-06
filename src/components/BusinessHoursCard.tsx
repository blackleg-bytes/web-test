import { useState } from "react";
import TimeSelector from "./TimeSelector";

export default function BusinessHoursCard() {
  const [openTime, setOpenTime] = useState("9:00 AM");
  const [closeTime, setCloseTime] = useState("7:00 PM");

  return (
    <div className="bg-[#F9FAFC] p-5 rounded-2xl w-full max-w-md">
      <h3 className="text-lg font-semibold text-black">Monday</h3>

      <p className="text-sm text-gray-600 mt-1 mb-5">
        Set opening and closing hours
      </p>

      <div className="flex gap-3">
        <TimeSelector value={openTime} onChange={setOpenTime} />
        <TimeSelector value={closeTime} onChange={setCloseTime} />
      </div>
    </div>
  );
}
