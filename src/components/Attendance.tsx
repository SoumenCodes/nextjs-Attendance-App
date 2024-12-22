"use client";
import Image from "next/image";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function AttendanceChart() {
  const data = [
    {
      name: "Mon",
      present: 4000,
      absent: 2400,
    },
    {
      name: "Tue",
      present: 3000,
      absent: 1398,
    },
    {
      name: "Wed",
      present: 2000,
      absent: 9800,
    },
    {
      name: "Thu",
      present: 2780,
      absent: 3908,
    },
    {
      name: "Fri",
      present: 1890,
      absent: 4800,
    },
    {
      name: "Sat",
      present: 2390,
      absent: 3800,
    },
  ];
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1>Attendance</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;
