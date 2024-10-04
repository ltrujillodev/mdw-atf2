import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import { IconButton } from "@mui/material";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "negocio", headerName: "NEGOCIO", width: 200 },
  { field: "razonSocial", headerName: "RAZÓN SOCIAL", width: 250 },
  { field: "ruc", headerName: "RUC", width: 125 },
  { field: "direccion", headerName: "DIRECCIÓN", width: 350 },
  {
    field: "actions",
    headerName: "ACCIÓN",
    width: 100,
    renderCell: (params) => (
      <>
        <IconButton onClick={() => handleEdit(params.row.id)}>
          <CreateIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

const rows = [
  {
    id: 1,
    negocio: "Central",
    razonSocial: "Restaurante Central S.A.C.",
    ruc: "20548745123",
    direccion: "Av. Pedro de Osma 301, Barranco",
  },
  {
    id: 2,
    negocio: "Astrid y Gastón",
    razonSocial: "Astrid y Gastón S.A.C.",
    ruc: "20547852147",
    direccion: "Av. Paz Soldán 290, San Isidro",
  },
  {
    id: 3,
    negocio: "Maido",
    razonSocial: "Maido Fusión S.A.C.",
    ruc: "20548758974",
    direccion: "Calle San Martín 399, Miraflores",
  },
  {
    id: 4,
    negocio: "Rafael",
    razonSocial: "Restaurante Rafael S.A.C.",
    ruc: "20548754123",
    direccion: "Av. Pardo y Aliaga 660, San Isidro",
  },
  {
    id: 5,
    negocio: "Isolina",
    razonSocial: "Taberna Isolina S.A.C.",
    ruc: "20548796314",
    direccion: "Av. San Martín 101, Barranco",
  },
  {
    id: 6,
    negocio: "Carnal",
    razonSocial: "Carnal Steakhouse S.A.C.",
    ruc: "20548965478",
    direccion: "Calle Elías Aguirre 698, Miraflores",
  },
  {
    id: 7,
    negocio: "Osso",
    razonSocial: "Osso Carnicería y Salumería S.A.C.",
    ruc: "20548712345",
    direccion: "Calle Tahiti 175, La Molina",
  },
  {
    id: 8,
    negocio: "La Mar",
    razonSocial: "Cebichería La Mar S.A.C.",
    ruc: "20548745896",
    direccion: "Av. La Mar 770, Miraflores",
  },
  {
    id: 9,
    negocio: "El Mercado",
    razonSocial: "El Mercado Restaurante S.A.C.",
    ruc: "20548785247",
    direccion: "Av. Hipólito Unanue 203, Miraflores",
  },
  {
    id: 10,
    negocio: "Amoramar",
    razonSocial: "Restaurante Amoramar S.A.C.",
    ruc: "20548732156",
    direccion: "Jirón García y García 175, Barranco",
  },
  {
    id: 11,
    negocio: "La Picantería",
    razonSocial: "La Picantería S.A.C.",
    ruc: "20548798741",
    direccion: "Av. Francisco de Paula Camino 604, Surquillo",
  },
  {
    id: 12,
    negocio: "Huaca Pucllana",
    razonSocial: "Restaurante Huaca Pucllana S.A.C.",
    ruc: "20548725698",
    direccion: "General Borgoño cuadra 8, Miraflores",
  },
  {
    id: 13,
    negocio: "La Gloria",
    razonSocial: "La Gloria Restaurante S.A.C.",
    ruc: "20548796547",
    direccion: "Calle Atahualpa 201, Miraflores",
  },
  {
    id: 14,
    negocio: "Malabar",
    razonSocial: "Restaurante Malabar S.A.C.",
    ruc: "20548769541",
    direccion: "Av. Camino Real 101, San Isidro",
  },
  {
    id: 15,
    negocio: "Costanera 700",
    razonSocial: "Costanera 700 S.A.C.",
    ruc: "20548785478",
    direccion: "Av. Del Ejército 421, Miraflores",
  },
  {
    id: 16,
    negocio: "Fiesta",
    razonSocial: "Fiesta Gourmet S.A.C.",
    ruc: "20548795147",
    direccion: "Av. Reducto 1278, Miraflores",
  },
  {
    id: 17,
    negocio: "Mayta",
    razonSocial: "Restaurante Mayta S.A.C.",
    ruc: "20548785962",
    direccion: "Av. 28 de Julio 1290, Miraflores",
  },
  {
    id: 18,
    negocio: "Osaka",
    razonSocial: "Restaurante Osaka S.A.C.",
    ruc: "20548795132",
    direccion: "Av. Pardo y Aliaga 640, San Isidro",
  },
  {
    id: 19,
    negocio: "Chifa Titi",
    razonSocial: "Chifa Titi S.A.C.",
    ruc: "20548762514",
    direccion: "Av. Javier Prado Este 1212, San Borja",
  },
  {
    id: 20,
    negocio: "Antica Trattoria",
    razonSocial: "Antica Trattoria S.A.C.",
    ruc: "20548796412",
    direccion: "Calle Bellavista 382, Miraflores",
  },
  {
    id: 21,
    negocio: "Dondoh",
    razonSocial: "Dondoh Robata Grill S.A.C.",
    ruc: "20548745189",
    direccion: "Calle Libertadores 880, San Isidro",
  },
  {
    id: 22,
    negocio: "Maras",
    razonSocial: "Restaurante Maras S.A.C.",
    ruc: "20548741235",
    direccion: "Calle Amador Merino Reyna 320, San Isidro",
  },
  {
    id: 23,
    negocio: "El Bodegón",
    razonSocial: "Restaurante El Bodegón S.A.C.",
    ruc: "20548765432",
    direccion: "Av. La Mar 849, Miraflores",
  },
  {
    id: 24,
    negocio: "IK Restaurante",
    razonSocial: "IK Fusión S.A.C.",
    ruc: "20548796325",
    direccion: "Calle Elías Aguirre 179, Miraflores",
  },
  {
    id: 25,
    negocio: "El Pan de la Chola",
    razonSocial: "El Pan de la Chola S.A.C.",
    ruc: "20548712398",
    direccion: "Av. La Mar 918, Miraflores",
  },
  {
    id: 26,
    negocio: "Siete Sopas",
    razonSocial: "Siete Sopas S.A.C.",
    ruc: "20548745963",
    direccion: "Av. Arequipa 2394, Lince",
  },
  {
    id: 27,
    negocio: "Tanta",
    razonSocial: "Restaurantes Tanta S.A.C.",
    ruc: "20548732147",
    direccion: "Av. Camino Real 1235, San Isidro",
  },
  {
    id: 28,
    negocio: "Panchita",
    razonSocial: "Restaurante Panchita S.A.C.",
    ruc: "20548796321",
    direccion: "Calle 2 de Mayo 298, Miraflores",
  },
  {
    id: 29,
    negocio: "La Nacional",
    razonSocial: "Cebichería La Nacional S.A.C.",
    ruc: "20548796584",
    direccion: "Av. Pardo y Aliaga 640, San Isidro",
  },
  {
    id: 30,
    negocio: "Hanzo",
    razonSocial: "Restaurante Hanzo S.A.C.",
    ruc: "20548736951",
    direccion: "Av. Conquistadores 598, San Isidro",
  },
  {
    id: 31,
    negocio: "DonDoh",
    razonSocial: "DonDoh Robata Grill S.A.C.",
    ruc: "20548745879",
    direccion: "Calle San Fernando 380, Miraflores",
  },
  {
    id: 32,
    negocio: "Sushi Ito",
    razonSocial: "Sushi Ito Perú S.A.C.",
    ruc: "20548745632",
    direccion: "Av. Primavera 698, Surco",
  },
  {
    id: 33,
    negocio: "Segundo Muelle",
    razonSocial: "Segundo Muelle Perú S.A.C.",
    ruc: "20548751263",
    direccion: "Calle 2 de Mayo 298, Miraflores",
  },
  {
    id: 34,
    negocio: "La Plazita",
    razonSocial: "Restaurante La Plazita S.A.C.",
    ruc: "20548765897",
    direccion: "Av. Mariscal La Mar 413, Miraflores",
  },
  {
    id: 35,
    negocio: "Pescados Capitales",
    razonSocial: "Pescados Capitales S.A.C.",
    ruc: "20548798741",
    direccion: "Av. La Mar 1337, Miraflores",
  },
  {
    id: 36,
    negocio: "Wa Lok",
    razonSocial: "Restaurante Wa Lok S.A.C.",
    ruc: "20548796312",
    direccion: "Jirón Paruro 896, Cercado de Lima",
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
      <h1>Lista de Negocios</h1>
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
