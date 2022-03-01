import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "makeId",
    headerName: "Make Id",
    width: 150,
    editable: false,
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
  },
];

const rows = [
  {
    id: 1,
    MakeId: 449,
    MakeName: "MERCEDES-BENZ",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
  },
  {
    id: 2,
    MakeId: 449,
    MakeName: "MERCEDES-BENZ",
    VehicleTypeId: 3,
    VehicleTypeName: "Truck ",
  },
  {
    id: 3,
    MakeId: 449,
    MakeName: "MERCEDES-BENZ",
    VehicleTypeId: 5,
    VehicleTypeName: "Bus",
  },
  {
    id: 4,
    MakeId: 449,
    MakeName: "MERCEDES-BENZ",
    VehicleTypeId: 7,
    VehicleTypeName: "Multipurpose Passenger Vehicle (MPV)",
  },
  {
    id: 5,
    MakeId: 449,
    MakeName: "MERCEDES-BENZ",
    VehicleTypeId: 10,
    VehicleTypeName: "Incomplete Vehicle",
  },
  {
    id: 6,
    MakeId: 465,
    MakeName: "MERCURY",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
  },
  {
    id: 7,
    MakeId: 465,
    MakeName: "MERCURY",
    VehicleTypeId: 3,
    VehicleTypeName: "Truck ",
  },
  {
    id: 8,
    MakeId: 465,
    MakeName: "MERCURY",
    VehicleTypeId: 7,
    VehicleTypeName: "Multipurpose Passenger Vehicle (MPV)",
  },
  {
    id: 9,
    MakeId: 465,
    MakeName: "MERCURY",
    VehicleTypeId: 10,
    VehicleTypeName: "Incomplete Vehicle",
  },
  {
    id: 10,
    MakeId: 928,
    MakeName: "FABRICACION Y COMERCIALIZACION PENA",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 11,
    MakeId: 945,
    MakeName: "CAPSTONE COMMERCE",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 12,
    MakeId: 1820,
    MakeName: "COMMERCIAL TRAILER",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 13,
    MakeId: 2350,
    MakeName: "MERCH MOTORCYCLE CO.",
    VehicleTypeId: 1,
    VehicleTypeName: "Motorcycle",
  },
  {
    id: 14,
    MakeId: 2351,
    MakeName: "MERCHANT'S TRAILERS AND GRILLS",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 15,
    MakeId: 4977,
    MakeName: "STRICK COMMERCIAL TRAILER",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 16,
    MakeId: 5416,
    MakeName: "CA. COMMERCIAL TRAILER",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 17,
    MakeId: 5804,
    MakeName: "COMMERCIAL STRUCTURES",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 18,
    MakeId: 6983,
    MakeName: "J & T MERCHANDISE INC",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 19,
    MakeId: 7008,
    MakeName: "COMMERCIAL MOBILE SYSTEMS",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 20,
    MakeId: 8306,
    MakeName: "COMMERCIAL MANUFACTURING & INDUSTRIAL, CO.",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 21,
    MakeId: 8959,
    MakeName: "BIVOUAC COMMERCIAL VEHICLES",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
  {
    id: 22,
    MakeId: 9539,
    MakeName: "COMMERCIAL VEHICLES CV",
    VehicleTypeId: 6,
    VehicleTypeName: "Trailer",
  },
];

export default function Manufacturers() {
  return (
    <div style={{ height: 800, width: "100%", color: "black" }}>
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
