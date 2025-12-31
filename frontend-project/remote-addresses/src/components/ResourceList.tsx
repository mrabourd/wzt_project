import { useEffect, useState } from 'react';
import type { Resource } from '../types/Resource';
import { DataGrid } from '@mui/x-data-grid';
import type {GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { Typography, Box, Chip } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Name', width: 250 },
  { 
    field: 'category', 
    headerName: 'Category', 
    width: 130,
    renderCell: (params) => (
      <Chip label={params.value} color="primary" variant="outlined" size="small" />
    )
  },
  { field: 'sub_category', headerName: 'Type', width: 130 },
  { field: 'address', headerName: 'Address', width: 300 },
  { field: 'hours', headerName: 'Opening Hours', width: 400 },
];

export default function ResourceList() {
  const [rows, setRows] = useState<Resource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Resource[]>('http://localhost:3000/resources');
        setRows(response.data);
      } catch (error) {
        console.error("Erreur API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ height: 600, width: '100%', p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Guide for Newcomers in Paris
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        // pageSize={10}
        // rowsPerPageOptions={[10]}
        loading={loading}
        sx={{
          backgroundColor: 'white',
          boxShadow: 2,
          border: 2,
          borderColor: '#e0e0e0',
          '& .MuiDataGrid-cell:hover': { color: 'primary.main' },
        }}
      />
    </Box>
  );
}