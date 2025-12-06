import { useState } from "react";
import { ArrowBigLeft, ArrowRight, ChevronRight, Clock, X } from "lucide-react";
import BusinessHours from "./BusinessHours";
import TimeSelector from "./TimeSelector";
import Calendar from "./Calender";
import BusinessHoursCard from "./BusinessHoursCard";

export default function BookingsSetup({
  mobileSidebarOpen,
  setMobileSidebarOpen,
}: {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
}) {
  const [selectedDates, setSelectedDates] = useState<string[]>([
    "Nov 24, 2024",
    "Nov 24, 2024 · 11:AM - 1 PM",
  ]);

  const [partialOpenTime, setPartialOpenTime] = useState("9:00 AM");
  const [partialCloseTime, setPartialCloseTime] = useState("7:00 PM");

  return (
    <div className="flex-1 overflow-auto">
      <div className="">
        {/* Header */}
        <div className="sticky top-0 bg-white z-50 flex mx-auto max-w-7xl items-center justify-between mb-6 border-b border-gray-200 p-6">
          {/* Mobile menu button */}
          <button
            className="md:hidden mr-2 p-2 rounded-md border border-gray-200 hover:bg-gray-50"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </button>

          {/* Left: title */}
          <h1 className="text-2xl font-semibold text-[#2D3035]">
            Bookings setup
          </h1>

          {/* Progress */}
          <div className="flex items-center gap-3">
            <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              {/* filled portion – ~30% for step 1/3 */}
              <div className="h-full w-1/3 bg-[#072AC8] rounded-full" />
            </div>
            <span className="text-xs tracking-wide text-gray-600">
              STEP 1 / 3
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Cancel
            </button>
            <button className="inline-flex items-center px-5 py-2 rounded-md text-sm font-medium text-white bg-[#072AC8] hover:bg-blue-700">
              Next
              {/* replace with your ChevronRight icon */}
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 4.5L12.5 10L7.5 15.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <h2 className="text-xl mx-auto max-w-7xl font-semibold mb-2 px-6 text-[#2D3035]">
          Business details
        </h2>

        <div className="p-6 grid grid-cols-3 gap-12 mx-auto max-w-7xl">
          {/* Left Section */}
          <div className="col-span-2 pr-10 space-y-8">
            {/* Business Details */}
            <div>
              <div className="space-y-6">
                {/* Service Type */}
                <div className="relative mb-10">
                  <select className="bg-gray-50 w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none text-gray-700 appearance-none">
                    <option>Hair salon - Barbershop - etc</option>
                  </select>

                  {/* Icon */}
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-sm font-semibold mb-2">
                    Your business hours
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    When can clients book with you?
                  </p>
                  <BusinessHours />
                </div>

                {/* Blackout Dates */}
                <div className="py-6 px-4 rounded-lg">
                  <h3 className="text-sm font-semibold mb-1">
                    Blackout dates & time
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Dates you're not available on like holidays and special
                    occasions
                  </p>
                  <div className="bg-[#E8F5FF] flex justify-between items-center p-4 rounded-lg">
                    <div>
                      <button className="text-[#072AC8] font-medium text-sm flex items-center gap-2">
                        SET DATES
                      </button>
                      <p className="text-lg font-medium text-[#072AC8]">
                        Select times
                      </p>
                    </div>

                    <ArrowRight className="w-6 h-6 text-[#072AC8]" />
                  </div>

                  {/* Selected Dates */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedDates.map((date, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-300"
                      >
                        <span className="text-sm">{date}</span>
                        <button className="text-gray-500 hover:text-gray-700">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6 ">
            {/* Monday Hours */}
            <BusinessHoursCard />

            {/* Calendar */}
            <Calendar />

            {/* Set Partial Availability */}
            <div className="max-w-sm rounded-lg bg-white py-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border border-gray-300 text-[#072AC8]"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Set partial availability
                  </h3>
                  <p className="mb-4 text-xs text-gray-600">
                    Block out time on a specific day
                  </p>
                </div>
              </label>
              <div>
                <div className="flex gap-3">
                  <TimeSelector
                    value={partialOpenTime}
                    onChange={setPartialOpenTime}
                  />
                  <TimeSelector
                    value={partialCloseTime}
                    onChange={setPartialCloseTime}
                  />
                </div>

                <div className="mt-4 flex justify-between items-center pt-2 pb-5 border-b border-gray-300">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      November 24
                    </p>
                    <p className="text-xs text-gray-600">11 AM - 1 PM</p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-medium">2h</span>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    className=" px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className=" px-3 inline-flex items-center justify-center rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Save
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
