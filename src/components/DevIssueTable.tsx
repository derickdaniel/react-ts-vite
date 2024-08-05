import { useMemo } from "react";
import { useTable } from "react-table";

const DevIssueTable = ({ data }: any) => {
  const columns = useMemo(
    () => [
      { Header: "Id", accessor: "id", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Type", accessor: "issueType", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Issue Description", accessor: "issueDesc", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Root Cause", accessor: "cause", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Resolved", accessor: "resolved", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Resolution", accessor: "resolution", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Tags", accessor: "tags", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "References", accessor: "references", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "CreatedAt", accessor: "createdAt", Cell: ({ value }: any) => value || 'N/A' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    // className="table-responsive table-body"
    <div>
      <table
        {...getTableProps()}
        className="table table-hover table-striped table-bordered"
      >
        <thead className="table-dark text-center">
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id + i}>
              {headerGroup.headers.map((column, i) => (
                <th {...column.getHeaderProps()} key={column.id + i}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="text-center" key={row.id}>
                {row.cells.map((cell, i) => (
                  <td {...cell.getCellProps()} key={i}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DevIssueTable;
