import React from 'react';
import { 
  Box, Typography, Paper, InputBase, Button, Avatar, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const primaryBlue = '#002B5C';
const secondaryYellow = '#FFD700';

// Jadval uchun ma'lumotlar
const studentsData = [
  { id: 'ST0012', name: 'Sarah Jones', level: 'IELTS Adv.', date: '15/02/2026', attendance: '98%', status: 'Active' },
  { id: 'ST0013', name: 'Enny Gmith', level: 'IELTS Adv.', date: '15/02/2026', attendance: '98%', status: 'Active' },
  { id: 'ST0014', name: 'Marry Firenin', level: 'IELTS Adv.', date: '15/02/2026', attendance: '98%', status: 'Active' },
  { id: 'ST0015', name: 'Jamert Isormson', level: 'IELTS Adv.', date: '22/02/2026', attendance: '98%', status: 'Inactive' },
  { id: 'ST0016', name: 'Sarah Jones', level: 'IELTS Adv.', date: '15/02/2026', attendance: '98%', status: 'Active' },
  { id: 'ST0017', name: 'Sarah Barah', level: 'IELTS Adv.', date: '15/02/2026', attendance: '98%', status: 'Active' },
  { id: 'ST0018', name: 'Sarah Hame', level: 'IELTS Adv.', date: '15/02/2026', attendance: '98%', status: 'Active' },
  { id: 'ST0019', name: 'Sarah Konner', level: 'IELTS Adv.', date: '15/02/2026', attendance: '74%', status: 'Inactive' },
];

const miniLineData = [
  { v: 10 }, { v: 120 }, { v: 100 }, { v: 150 }, { v: 130 }, { v: 200 }
];

const pieData = [
  { name: 'IELTS Adv.', value: 400 },
  { name: 'Level B', value: 300 },
  { name: 'Level A', value: 300 },
];
const PIE_COLORS = [primaryBlue, secondaryYellow, '#1E40AF', '#FBBF24'];

const Students = () => {
  return (
    <Box sx={{ p: 4, display: 'flex', gap: 4 }}>
      {/* CHAP TOMON - JADVAL QISMI */}
      <Box sx={{ flex: 3 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: '30px', bgcolor: '#fff' }}>
          {/* Top Bar: Search and Add Button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, gap: 2 }}>
            <Paper sx={{ 
              p: '8px 20px', display: 'flex', alignItems: 'center', 
              flex: 1, borderRadius: '15px', bgcolor: '#F4F7FC', border: '1px solid #E0E7FF' 
            }}>
              <SearchIcon sx={{ color: '#9BA3AF', mr: 1 }} />
              <InputBase placeholder="Search" sx={{ flex: 1 }} />
            </Paper>
            <Button 
              variant="contained" 
              startIcon={<AddIcon />}
              sx={{ 
                bgcolor: primaryBlue, borderRadius: '15px', px: 4, 
                textTransform: 'none', fontWeight: 700, fontSize: '1rem' 
              }}
            >
              Add Student
            </Button>
          </Box>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#F8FAFC' }}>
                  {['Student ID', 'Full Name', 'Class/Level', 'Enrollment Date', 'Attendance', 'Status'].map((head) => (
                    <TableCell key={head} sx={{ fontWeight: 800, color: '#334155', borderBottom: 'none' }}>{head}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {studentsData.map((row, index) => (
                  <TableRow key={index} sx={{ '&:hover': { bgcolor: '#F8FAFC' } }}>
                    <TableCell sx={{ fontWeight: 600, borderBottom: '1px solid #F1F5F9' }}>{row.id}</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 32, height: 32 }} />
                        <Typography sx={{ fontWeight: 600 }}>{row.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: '#64748B', borderBottom: '1px solid #F1F5F9' }}>{row.level}</TableCell>
                    <TableCell sx={{ color: '#64748B', borderBottom: '1px solid #F1F5F9' }}>{row.date}</TableCell>
                    <TableCell sx={{ color: '#64748B', borderBottom: '1px solid #F1F5F9' }}>{row.attendance}</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #F1F5F9' }}>
                      <Chip 
                        label={row.status} 
                        sx={{ 
                          fontWeight: 700, 
                          bgcolor: row.status === 'Active' ? '#DCFCE7' : '#FEE2E2',
                          color: row.status === 'Active' ? '#166534' : '#991B1B',
                          borderRadius: '8px'
                        }} 
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* O'NG TOMON - GRAFIKLAR */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Enrollment Trends */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: '25px' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Enrollment Trends</Typography>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={miniLineData}>
              <Line type="monotone" dataKey="v" stroke={primaryBlue} strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>

        {/* Level Distribution */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: '25px' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Level Distribution</Typography>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Legend */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, mt: 2 }}>
            {pieData.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: PIE_COLORS[i] }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>{item.name}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Students;