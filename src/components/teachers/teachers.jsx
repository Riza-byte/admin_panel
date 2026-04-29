import React from 'react';
import { 
  Box, Typography, Paper, InputBase, Button, Avatar, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, List, ListItem, ListItemText 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const primaryBlue = '#002B5C';
const secondaryYellow = '#FFD700';

const teachersData = [
  { id: 'TH002', name: 'Sarah Thompson', specialist: 'IELTS Adv.', qual: 'MA Applied Ling.', courses: '1 IELTS course', status: 'Active' },
  { id: 'TH003', name: 'Marry Gmith', specialist: 'IELTS Adv.', qual: 'MA Applied Ling.', courses: '1 IELTS course', status: 'Active' },
  { id: 'TH004', name: 'Marry Firenin', specialist: 'IELTS Adv.', qual: 'MA Applied Ling.', courses: '1 IELTS course', status: 'Active' },
  { id: 'TH005', name: 'Jamerl Isormson', specialist: 'IELTS Adv.', qual: 'MA Applied Ling.', courses: '1 IELTS course', status: 'Inactive' },
  { id: 'TH006', name: 'Sarah Jones', specialist: 'IELTS Adv.', qual: 'MA Applied Ling.', courses: '1 IELTS course', status: 'Active' },
  { id: 'TH007', name: 'Sarah Barah', specialist: 'IELTS Adv.', qual: 'MA Applied Ling.', courses: '1 IELTS course', status: 'Active' },
  { id: 'TH008', name: 'Sarah Hame', specialist: 'IELTS Adv.', qual: 'MA Applied Ling.', courses: '1 IELTS course', status: 'Active' },
  { id: 'TH009', name: 'Sarah Konner', specialist: 'IELTS Adv.', qual: 'MA Applied Ling.', courses: '1 IELTS course', status: 'Inactive' },
];

const loadData = [
  { name: 'Jan', v: 20 }, { name: 'Feb', v: 140 }, { name: 'Mar', v: 80 },
  { name: 'Apr', v: 150 }, { name: 'May', v: 120 }, { name: 'Jun', v: 180 }, { name: 'Jul', v: 250 }
];

const Teachers = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
      {/* CHAP TOMON - TEACHERS TABLE */}
      <Box sx={{ flex: 3 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: '30px', bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
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
                textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: '#001a3a' }
              }}
            >
              Add Teacher
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: '#F8FAFC' }}>
                <TableRow>
                  {['Teacher ID', 'Full Name', 'Subject Specialist', 'Qualifications', 'Courses Assigned', 'Status'].map((head) => (
                    <TableCell key={head} sx={{ fontWeight: 800, color: '#334155', border: 'none' }}>{head}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {teachersData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: 600 }}>{row.id}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 32, height: 32 }} />
                        <Typography sx={{ fontWeight: 600 }}>{row.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: '#64748B' }}>{row.specialist}</TableCell>
                    <TableCell sx={{ color: '#64748B' }}>{row.qual}</TableCell>
                    <TableCell sx={{ color: '#64748B' }}>{row.courses}</TableCell>
                    <TableCell>
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

      {/* O'NG TOMON - TEACHER SPOTLIGHT */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: '25px', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, textAlign: 'left' }}>Teacher Spotlight</Typography>
          <Avatar 
            src="/teacher_img.png" 
            sx={{ width: 100, height: 100, mx: 'auto', mb: 2, border: `3px solid ${secondaryYellow}` }} 
          />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>Subject Thompson</Typography>
          
          <Box sx={{ textAlign: 'left', mt: 3 }}>
            <Typography sx={{ fontWeight: 800, mb: 0.5 }}>Bio</Typography>
            <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet, consectetur adstrictritions, bio and nonnalty assurated.
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'left', mt: 3 }}>
            <Typography sx={{ fontWeight: 800, mb: 1 }}>Courses List</Typography>
            <List dense sx={{ p: 0 }}>
              {['1 IELTS course', 'Level B course', '1 IELTS course'].map((course, i) => (
                <ListItem key={i} sx={{ p: 0, mb: 0.5 }}>
                  <Typography variant="body2" sx={{ color: '#64748B' }}>• {course}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ textAlign: 'left', mt: 3 }}>
            <Typography sx={{ fontWeight: 800, mb: 2 }}>Overall Course Load</Typography>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={loadData}>
                <Line type="monotone" dataKey="v" stroke={primaryBlue} strokeWidth={3} dot={false} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Teachers;