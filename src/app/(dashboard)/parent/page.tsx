import Annoucement from "@/components/Annoucement";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

function Parentpage() {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xs font-semibold">Schedule (Soumen)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Annoucement />
      </div>
    </div>
  );
}

export default Parentpage;
