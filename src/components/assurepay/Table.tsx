"use client";

export default function APTable({ columns, rows }: any) {
  return (
    <table className="w-full border border-gray-200 bg-white">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((c: any) => (
            <th key={c} className="p-2 border-b text-left text-sm font-semibold">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r: any, i: number) => (
          <tr key={i} className="border-b hover:bg-gray-50">
            {Object.values(r).map((cell: any, j: number) => (
              <td key={j} className="p-2 text-sm">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
