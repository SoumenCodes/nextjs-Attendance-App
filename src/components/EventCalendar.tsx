"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Meeting with Bob",
    time: "10:00 AM",
    description: "Discuss project updates and next steps.",
  },
  {
    id: 2,
    title: "Lunch with Sarah",
    time: "12:30 PM",
    description: "Catch up and discuss potential collaboration.",
  },
  {
    id: 3,
    title: "Conference Call",
    time: "3:00 PM",
    description: "Join the monthly conference call with the team.",
  },
  {
    id: 4,
    title: "Gym",
    time: "6:00 PM",
    description: "Workout session at the local gym.",
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <Calendar
        className={"bg-white p-4 rounded-md "}
        onChange={onChange}
        value={value}
      />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Event</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-5 rounded-md border-2 border-gray-100 border-t-4 odd:bg-lamaSky even:bg-lamaPurple"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-600">{event.title}</h3>
              <span className="text-slate-700 text-xs">{event.time}</span>
            </div>
            <p className="mt2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar;
