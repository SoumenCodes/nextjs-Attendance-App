"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",
    income: 4000,
    expance: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expance: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expance: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expance: 3908,
  },
  {
    name: "May",
    income: 1890,
    expance: 4800,
  },
  {
    name: "June",
    income: 2390,
    expance: 3800,
  },
  {
    name: "July",
    income: 3490,
    expance: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expance: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expance: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expance: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expance: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expance: 4300,
  },
];

function FinanceChart() {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1>Finance</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickMargin={10} />
          <YAxis tickMargin={20} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="expance"
            stroke="#8884d8"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#82ca9d"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FinanceChart;