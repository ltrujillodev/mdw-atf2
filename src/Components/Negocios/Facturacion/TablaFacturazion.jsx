import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { IconButton, Tooltip, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";

// Estilos condicionales que cambian según el tema claro u oscuro
const useTableStyles = (theme) => ({
  paperBackground: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  rowBackground: theme.palette.mode === 'dark' ? '#2D3748' : '#f5f5f5',
  rowAlternateBackground: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  rowHoverBackground: theme.palette.mode === 'dark' ? '#4A5568' : '#e0f7fa',
  textPrimary: theme.palette.mode === 'dark' ? '#E2E8F0' : '#333',
  textSecondary: theme.palette.mode === 'dark' ? '#CBD5E0' : '#555',
  headerBackground: theme.palette.mode === 'dark' ? '#2D3748' : '#e0e0e0',
  headerText: theme.palette.mode === 'dark' ? '#CBD5E0' : '#333',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "8px",
  boxShadow: theme.shadows[3],
}));

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "nombre", headerName: "NOMBRE", width: 200 },
  { field: "razonSocial", headerName: "RAZÓN SOCIAL", width: 250 },
  { field: "fecha", headerName: "FECHA", width: 120 },
  { field: "ruc", headerName: "RUC", width: 150 },
  { field: "direccion", headerName: "DIRECCIÓN", width: 250 },
  { field: "importe", headerName: "Importe", width: 150 },
  {
    field: "actions",
    headerName: "Acciones",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Tooltip title="Editar">
          <IconButton size="small" color="primary" onClick={() => handleEdit(params.row.id)}>
            <CreateIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Imprimir">
          <IconButton size="small" color="secondary" onClick={() => handlePrint(params.row.id)}>
            <PrintIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar">
          <IconButton size="small" color="error" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    nombre: "Central",
    razonSocial: "Restaurante Central S.A.C.",
    ruc: "20548745123",
    direccion: "Av. Pedro de Osma 301, Barranco",
    fecha: "15/01/2021",
    importe: "S/. 1500.00",
  },
  {
    id: 2,
    nombre: "Maido",
    razonSocial: "Maido Cocina Nikkei S.A.C.",
    ruc: "20563145789",
    direccion: "Calle San Martín 399, Miraflores",
    fecha: "20/03/2021",
    importe: "S/. 3000.00",
  },
  {
    id: 3,
    nombre: "Astrid y Gastón",
    razonSocial: "Grupo Acurio Restaurantes S.A.C.",
    ruc: "20484567492",
    direccion: "Av. Paz Soldán 290, San Isidro",
    fecha: "10/05/2021",
    importe: "S/. 2500.00",
  },
  {
    id: 4,
    nombre: "La Mar",
    razonSocial: "La Mar Cevichería S.A.C.",
    ruc: "20584791236",
    direccion: "Av. La Mar 770, Miraflores",
    fecha: "18/06/2021",
    importe: "S/. 1800.00",
  },
  {
    id: 5,
    nombre: "Rafael",
    razonSocial: "Restaurante Rafael S.A.C.",
    ruc: "20548976483",
    direccion: "Calle San Martín 300, Miraflores",
    fecha: "25/08/2021",
    importe: "S/. 2000.00",
  },
  {
    id: 6,
    nombre: "Isolina",
    razonSocial: "Isolina Taberna Peruana S.A.C.",
    ruc: "20574638901",
    direccion: "Av. Pedro de Osma 101, Barranco",
    fecha: "05/09/2021",
    importe: "S/. 1200.00",
  },
  {
    id: 7,
    nombre: "Osaka",
    razonSocial: "Osaka Cocina Nikkei S.A.C.",
    ruc: "20513487291",
    direccion: "Av. Pardo y Aliaga 660, San Isidro",
    fecha: "12/10/2021",
    importe: "S/. 3500.00",
  },
  {
    id: 8,
    nombre: "La Picantería",
    razonSocial: "La Picantería S.A.C.",
    ruc: "20489567345",
    direccion: "Av. Francisco Moreno 388, Surquillo",
    fecha: "22/11/2021",
    importe: "S/. 1000.00",
  },
  {
    id: 9,
    nombre: "El Mercado",
    razonSocial: "El Mercado S.A.C.",
    ruc: "20531457892",
    direccion: "Av. Hipólito Unanue 203, Miraflores",
    fecha: "30/12/2021",
    importe: "S/. 2300.00",
  },
  {
    id: 10,
    nombre: "Amaz",
    razonSocial: "Amaz S.A.C.",
    ruc: "20519475234",
    direccion: "Av. La Paz 1079, Miraflores",
    fecha: "02/02/2022",
    importe: "S/. 2800.00",
  },
];

export default function DataTable() {
  const theme = useTheme();
  const styles = useTableStyles(theme); // Obtenemos los estilos condicionales según el tema

  const handleEdit = (id) => {
    console.log(`Editar registro con ID: ${id}`);
  };

  const handlePrint = (id) => {
    console.log(`Imprimir registro con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Eliminar registro con ID: ${id}`);
  };

  return (
    <StyledPaper sx={{ 
      width: '100%', 
      height: 500, 
      backgroundColor: styles.paperBackground, 
      margin: 0,  // Eliminamos márgenes
      padding: 0  // Ajustamos el padding si es necesario
    }}
  >
    <DataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      disableSelectionOnClick
      sx={{
        border: 0,
        width: '100%', // Aseguramos que la tabla ocupe el 100%
        ".MuiDataGrid-row": {
          backgroundColor: styles.rowBackground,
          "&:nth-of-type(odd)": {
            backgroundColor: styles.rowAlternateBackground,
          },
          "&:hover": {
            backgroundColor: styles.rowHoverBackground,
          },
        },
        ".MuiDataGrid-columnHeaders": {
          backgroundColor: styles.headerBackground,
          color: styles.headerText,
          fontSize: "16px",
          borderBottom: `1px solid ${styles.textSecondary}`,
        },
        ".MuiDataGrid-cell": {
          color: styles.textPrimary,
        },
      }}
    />
    </StyledPaper>
  );
}
