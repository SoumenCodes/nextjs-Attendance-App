"use client";
import { count } from "console";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#CFCEFF",
  },
];

function CountCharts() {
  return (
    <div className="bg-white rounded-xl h-full w-full p-4">
      <div className="flex justify-center items-center">
        <h2 className="text-lg font-semibold">Students</h2>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar minAngle={15} background clockWise dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/malefemale.png"}
          alt="icon"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* bottom  */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,454</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,454</h1>
          <h2 className="text-xs text-gray-300">Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
}

export default CountCharts;
