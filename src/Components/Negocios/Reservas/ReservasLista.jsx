import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import { IconButton } from "@mui/material";

//ESTADO
//cancelado
import RuleIcon from "@mui/icons-material/Rule";
//recibido
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
//completado
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

//METODO DE PAGO
//tarjeta
import CreditCardIcon from "@mui/icons-material/CreditCard";
//efectivo
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
//plin o yape
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

//ACCION
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const columns = [
  { field: "id", headerName: "ID", width: 25 },
  { field: "negocio", headerName: "NEGOCIO", width: 250 },
  { field: "fecha", headerName: "FECHA", width: 150 },
  { field: "importe", headerName: "TOTAL", width: 150 },
  {
    field: "estado",
    headerName: "Estado",
    width: 150,
    renderCell: (params) => {
      if (params.value === "completado") {
        return (
          <>
            <PriceCheckIcon style={{ color: "green" }} />
          </>
        );
      } else if (params.value === "cancelado") {
        return (
          <>
            <RuleIcon style={{ color: "red" }} />
          </>
        );
      } else {
        return (
          <>
            <PlaylistAddCheckIcon style={{ color: "orange" }} />
          </>
        );
      }
    },
  },
  {
    field: "pago",
    headerName: "MÉTODO DE PAGO",
    width: 200,
    renderCell: (params) => {
      if (params.value === "efectivo") {
        return (
          <>
            <LocalAtmIcon style={{ color: "white" }} />
          </>
        );
      } else if (params.value === "tarjeta") {
        return (
          <>
            <CreditCardIcon style={{ color: "orange" }} />
          </>
        );
      } else if (params.value === "yape") {
        return (
          <>
            <QrCodeScannerIcon style={{ color: "purple" }} />
          </>
        );
      } else {
        return (
          <>
            <QrCodeScannerIcon style={{ color: "green" }} />
          </>
        );
      }
    },
  },
  {
    field: "accion",
    headerName: "ACCIÓN",
    width: 150,
    renderCell: (params) => (
      <>
        <IconButton onClick={() => handleEdit(params.row.id)}>
          <CloudDownloadIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <RemoveRedEyeIcon />
        </IconButton>
      </>
    ),
  },
];

const rows = [
  {
    id: 101,
    negocio: "Central",
    fecha: "2024-10-03",
    importe: 350.0,
    estado: <PriceCheckIcon />,
    pago: "tarjeta",
  },
  {
    id: 102,
    negocio: "Maido",
    fecha: "2024-09-30",
    importe: 290.5,
    estado: "recibido",
    pago: "yape",
  },
  {
    id: 103,
    negocio: "Astrid y Gastón",
    fecha: "2024-09-28",
    importe: 400.0,
    estado: "cancelado",
    pago: "efectivo",
  },
  {
    id: 104,
    negocio: "La Mar",
    fecha: "2024-09-25",
    importe: 180.75,
    estado: "completado",
    pago: "plin",
  },
  {
    id: 105,
    negocio: "Rafael",
    fecha: "2024-09-22",
    importe: 320.0,
    estado: "completado",
    pago: "tarjeta",
  },
  {
    id: 106,
    negocio: "Isolina",
    fecha: "2024-09-21",
    importe: 210.3,
    estado: "recibido",
    pago: "efectivo",
  },
  {
    id: 107,
    negocio: "Osaka",
    fecha: "2024-09-19",
    importe: 500.0,
    estado: "cancelado",
    pago: "plin",
  },
  {
    id: 108,
    negocio: "La Picantería",
    fecha: "2024-09-18",
    importe: 160.0,
    estado: "completado",
    pago: "tarjeta",
  },
  {
    id: 109,
    negocio: "El Mercado",
    fecha: "2024-09-17",
    importe: 275.5,
    estado: "recibido",
    pago: "yape",
  },
  {
    id: 110,
    negocio: "Amaz",
    fecha: "2024-09-16",
    importe: 450.0,
    estado: "completado",
    pago: "efectivo",
  },
  {
    id: 111,
    negocio: "Central",
    fecha: "2024-09-15",
    importe: 370.8,
    estado: "cancelado",
    pago: "plin",
  },
  {
    id: 112,
    negocio: "Maido",
    fecha: "2024-09-14",
    importe: 290.5,
    estado: "completado",
    pago: "tarjeta",
  },
  {
    id: 113,
    negocio: "Astrid y Gastón",
    fecha: "2024-09-13",
    importe: 400.0,
    estado: "recibido",
    pago: "yape",
  },
  {
    id: 114,
    negocio: "La Mar",
    fecha: "2024-09-12",
    importe: 180.75,
    estado: "completado",
    pago: "efectivo",
  },
  {
    id: 115,
    negocio: "Rafael",
    fecha: "2024-09-11",
    importe: 320.0,
    estado: "cancelado",
    pago: "plin",
  },
  {
    id: 116,
    negocio: "Isolina",
    fecha: "2024-09-10",
    importe: 210.3,
    estado: "completado",
    pago: "tarjeta",
  },
  {
    id: 117,
    negocio: "Osaka",
    fecha: "2024-09-09",
    importe: 500.0,
    estado: "recibido",
    pago: "yape",
  },
  {
    id: 118,
    negocio: "La Picantería",
    fecha: "2024-09-08",
    importe: 160.0,
    estado: "completado",
    pago: "efectivo",
  },
  {
    id: 119,
    negocio: "El Mercado",
    fecha: "2024-09-07",
    importe: 275.5,
    estado: "cancelado",
    pago: "plin",
  },
  {
    id: 120,
    negocio: "Amaz",
    fecha: "2024-09-06",
    importe: 450.0,
    estado: "completado",
    pago: "tarjeta",
  },
  {
    id: 121,
    negocio: "Central",
    fecha: "2024-09-05",
    importe: 370.8,
    estado: "recibido",
    pago: "yape",
  },
];

const paginationModel = {
  rowsPerPage: "Filas por mostrar",
  page: 0,
  pageSize: 5,
};

export default function DataTable() {
  const handleEdit = (id) => {
    console.log(`Editar registro con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Eliminar registro con ID: ${id}`);
  };
  return (
    <Paper sx={{ height: "auto", width: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        slotProps={{
          pagination: { labelRowsPerPage: "Filas por página" },
        }}
      />
    </Paper>
  );
}
