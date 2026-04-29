import React from 'react';
import { 
  Box, Typography, Paper, Button, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, Chip, IconButton,
  Grid // <--- Mana shu yetishmayotgan edi!
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const primaryBlue = '#002B5C';

const mockTestsData = [
  { id: 'MT-001', title: 'IELTS Full Mock V1', category: 'Full Test', questions: 80, time: '2:40 min', status: 'Published' },
  { id: 'MT-002', title: 'Reading Academic Special', category: 'Reading', questions: 40, time: '60 min', status: 'Draft' },
  { id: 'MT-003', title: 'Listening Mastery Prep', category: 'Listening', questions: 40, time: '30 min', status: 'Published' },
];

const MockTests = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 800, color: primaryBlue }}>Mock Test Management</Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          sx={{ bgcolor: primaryBlue, borderRadius: '12px', textTransform: 'none', px: 3 }}
        >
          Create New Mock
        </Button>
      </Box>

      {/* Grid endi xato bermaydi */}
      <Grid container spacing={3}>
        {/* Testlar Ro'yxati */}
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: '25px' }}>
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: '#F8FAFC' }}>
                  <TableRow>
                    {['ID', 'Test Title', 'Category', 'Questions', 'Status', 'Actions'].map((h) => (
                      <TableCell key={h} sx={{ fontWeight: 800, border: 'none' }}>{h}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockTestsData.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell sx={{ fontWeight: 600 }}>{test.id}</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>{test.title}</TableCell>
                      <TableCell>{test.category}</TableCell>
                      <TableCell>{test.questions} Qs / {test.time}</TableCell>
                      <TableCell>
                        <Chip 
                          label={test.status} 
                          sx={{ 
                            fontWeight: 700, 
                            bgcolor: test.status === 'Published' ? '#DCFCE7' : '#F1F5F9',
                            color: test.status === 'Published' ? '#166534' : '#64748B' 
                          }} 
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton size="small"><EditIcon /></IconButton>
                        <IconButton size="small" color="error"><DeleteIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Tezkor Statistika */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: '25px', bgcolor: primaryBlue, color: '#fff' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Quick Stats</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>Total Tests Created</Typography>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>24</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>Active Participations</Typography>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>1,204</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MockTests;