import React, { useState, useMemo } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { AgGridReact } from "ag-grid-react";
import { themeMaterial } from "ag-grid-community";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const AgGridPage: React.FC = () => {
  const columnDefs = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        headerName: `Column ${i + 1}`,
        field: `col${i + 1}`,
        sortable: true,
        filter: true,
        resizable: true,
      })),
    []
  );

  const rowData = useMemo(
    () =>
      Array.from({ length: 30000 }, (_, rowIndex) => {
        let row: any = {};
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
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={20}
        theme={themeMaterial}
      />
    </div>
  );
};

export default AgGridPage;
