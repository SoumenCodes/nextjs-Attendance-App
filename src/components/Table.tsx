import React from "react";

function Table({ columns, renderRow, data }: any) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns?.map((col: any, index: number) => (
            <th className={col.className} key={col.accessor}>
              {col.headers}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item: any, index: any) => renderRow(item, index))}
      </tbody>
    </table>
  );
}

export default Table;
