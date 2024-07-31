import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";

const DevIssueTable = ({ data }: any) => {
  const columns = useMemo(
    () => [
      { Header: "Id", accessor: "id", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Issue Type", accessor: "issueType", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Issue Description", accessor: "issueDesc", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Root Cause", accessor: "cause", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Resolved", accessor: "resolved", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Resolution", accessor: "resolution", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Tags", accessor: "tags", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "Refs", accessor: "references", Cell: ({ value }: any) => value || 'N/A' },
      { Header: "CreatedAt", accessor: "createdAt", Cell: ({ value }: any) => value || 'N/A' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="table-responsive table-body">
      <table {...getTableProps()} className="table table-hover table-striped table-bordered">
        <thead  className="table-dark">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
