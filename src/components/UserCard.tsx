import Image from "next/image";
import React from "react";

function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="bg-white text-green-500 text-[10px] px-2 py-1 rounded-full">
          2024/22
        </span>
        <Image alt="..." src={"/more.png"} width={20} height={20} />
      </div>
      <h3 className="text-2xl font-semibold my-4">1,454</h3>
      <h2 className="capitalize text-sm font-medium text-slate-500">{type}s</h2>
    </div>
  );
}

export default UserCard;
