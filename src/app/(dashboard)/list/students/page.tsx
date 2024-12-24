import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData, teachersData } from "@/lib/data";
import { access } from "fs";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function StudentListPage() {
  const columns = [
    {
      headers: "Info",
      accessor: "info",
    },
    {
      headers: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    {
      headers: "Grade",
      accessor: "grade",
      className: "hidden md:table-cell",
    },

    {
      headers: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      headers: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      headers: "Actions",
      accessor: "actions",
      className: "hidden lg:table-cell",
    },
  ];
  function renderRow(item: any) {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamapurpleLight"
      >
        <td className="flex items-center gap-4 p-4">
          <Image
            alt=""
            src={item.photo}
            width={40}
            height={40}
            className={"md:hidden xl:block w-10 h-10 rounded-full object-cover"}
          />
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item?.class}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex justify-center items-center bg-lamaSky rounded-full">
                <Image src={"/view.png"} alt="" width={16} height={16} />
              </button>
            </Link>
            <Link href={`/list/teachers/${item.id}`}>
              {item?.role !== "admin" && (
                <button className="w-7 h-7 flex justify-center items-center bg-lamaPurple rounded-full">
                  <Image src={"/delete.png"} alt="" width={16} height={16} />
                </button>
              )}
            </Link>
          </div>
        </td>
      </tr>
    );
  }
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top  of the page goes here... */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex justify-center items-center bg-lamaYellow rounded-full">
              <Image
                src="/filter.png"
                alt="Add User Icon"
                width={14}
                height={14}
              />{" "}
            </button>
            <button className="w-8 h-8 flex justify-center items-center bg-lamaYellow rounded-full">
              <Image
                src="/sort.png"
                alt="Add User Icon"
                width={14}
                height={14}
              />{" "}
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex justify-center items-center bg-lamaYellow rounded-full">
                <Image
                  src="/plus.png"
                  alt="Add User Icon"
                  width={14}
                  height={14}
                />{" "}
              </button>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      <Pagination />
    </div>
  );
}

export default StudentListPage;
