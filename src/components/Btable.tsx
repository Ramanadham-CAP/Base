import React, { useMemo, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  AllCommunityModule,
  themeMaterial,
} from "ag-grid-community";
import { MasterDetailModule } from "ag-grid-enterprise";
ModuleRegistry.registerModules([AllCommunityModule, MasterDetailModule]);

const DetailRenderer: React.FC<any> = (props) => {
  const d = props.data;
  return (
    <div style={{ padding: 12 }}>
      <h4 style={{ margin: "0 0 8px" }}>Details for Row {d.id}</h4>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: 12 }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: 6 }}>Attr</th>
            <th style={{ border: "1px solid #ddd", padding: 6 }}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 6 }}>Email</td>
            <td style={{ border: "1px solid #ddd", padding: 6 }}>
              {`user${d.id}@example.com`}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: 6 }}>Joined</td>
            <td style={{ border: "1px solid #ddd", padding: 6 }}>
              {2020 + (d.id % 5)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const BTable: React.FC = () => {
  const columnDefs = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        headerName: `Column ${i + 1}`,
        field: `col${i + 1}`,
        sortable: true,
        filter: true,
        resizable: true,
        pinned: i === 0 ? "left" : undefined,
      })),
    []
  );

  const rowData = useMemo(
    () =>
      Array.from({ length: 30000 }, (_, rowIndex) => {
        let row: any = { id: rowIndex + 1 };
        for (let col = 1; col <= 15; col++) {
          row[`col${col}`] = `Row ${rowIndex + 1} - Col ${col}`;
        }
        return row;
      }),
    []
  );

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "calc(100vh - 120px)",
        width: "100%",
      }}
    >
      <AgGridReact
        theme={themeMaterial}
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={100}
        masterDetail
        detailRowHeight={220}
        detailCellRenderer={DetailRenderer}
        onRowClicked={(e) => e.node.setExpanded(!e.node.expanded)}
      />
    </div>
  );
};

export default BTable;
