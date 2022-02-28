import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import MakeByName from "./MakeByName.json";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "makeId",
    headerName: "Make Id",
    width: 150,
    editable: false,
    valueGetter: (params) => `${MakeByName.row.MakeID}`,
  },
  {
    field: "makeName",
    headerName: "Make Name",
    width: 150,
    editable: false,
  },
  {
    field: "vehicleTypeId",
    headerName: "Type Id",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "vehicleTypeName",
    headerName: "Type Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [MakeByName];

export default function Manufacturers() {
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
