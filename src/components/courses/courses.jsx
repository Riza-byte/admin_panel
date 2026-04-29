import React from 'react';
import { 
  Box, Typography, Paper, InputBase, Button, Grid, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const primaryBlue = '#002B5C';
const secondaryYellow = '#FFD700';

const coursesData = [
  { name: 'IELTS Foundation List', instructors: 'Suitors Teachers', duration: '4 year', schedule: '15/02/2026', status: 'Active', isSpecial: false },
  { name: 'IELTS Adv. B', instructors: 'Suitors Teachers', duration: '2 year', schedule: '15/02/2026', status: 'Active', isSpecial: false },
  { name: 'IELTS Foundation Level B', instructors: 'Suniivs Teachers', duration: '4 year', schedule: 'Calendar', status: 'Active', isSpecial: true },
  { name: 'IELTS Adv. L2', instructors: 'Suniivs Teachers', duration: '1 mar', schedule: 'Person', status: 'Inactive', isSpecial: true },
];

const Courses = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
      {/* CHAP TOMON - COURSES LIST */}
      <Box sx={{ flex: 3 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: '30px', bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Paper sx={{ p: '8px 20px', display: 'flex', alignItems: 'center', flex: 1, borderRadius: '15px', bgcolor: '#F4F7FC', border: '1px solid #E0E7FF' }}>
              <SearchIcon sx={{ color: '#9BA3AF', mr: 1 }} />
              <InputBase placeholder="Search" sx={{ flex: 1 }} />
            </Paper>
            <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: primaryBlue, borderRadius: '15px', px: 4, textTransform: 'none', fontWeight: 700 }}>
              Add Course
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: '#F8FAFC' }}>
                <TableRow>
                  {['Course Name', 'Subject', 'Instructors', 'Duration', 'Schedule', 'Status'].map((h) => (
                    <TableCell key={h} sx={{ fontWeight: 800, color: '#334155', border: 'none' }}>{h}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} sx={{ p: 0, border: 'none' }}>
                    <Grid container spacing={2} sx={{ p: 2 }}>
                      {coursesData.map((course, index) => (
                        <Grid item xs={6} key={index}>
                          <Paper variant="outlined" sx={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #F1F5F9' }}>
                            <Box sx={{ height: 140, bgcolor: '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Box component="img" src="/placeholder-img.png" sx={{ width: 50, opacity: 0.3 }} />
                            </Box>
                            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <Box>
                                <Typography sx={{ fontWeight: 800, fontSize: '0.9rem' }}>{course.name}</Typography>
                                <Typography variant="caption" sx={{ color: '#64748B' }}>{course.instructors}</Typography>
                              </Box>
                              <Box sx={{ textAlign: 'right' }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '0.8rem' }}>{course.duration}</Typography>
                                {course.schedule === 'Calendar' ? <CalendarMonthIcon fontSize="small" sx={{ color: '#94A3B8' }} /> : 
                                 course.schedule === 'Person' ? <PersonIcon fontSize="small" sx={{ color: '#94A3B8' }} /> :
                                 <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>{course.schedule}</Typography>}
                                <Chip label={course.status} size="small" sx={{ mt: 1, fontWeight: 700, bgcolor: course.status === 'Active' ? '#DCFCE7' : '#FEE2E2', color: course.status === 'Active' ? '#166534' : '#991B1B' }} />
                              </Box>
                            </Box>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* O'NG TOMON - SCHEDULE & NEW COURSE */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: '25px' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Schedule</Typography>
          {/* Schedule Visualization Placeholder */}
          <Box sx={{ bgcolor: '#F8FAFC', borderRadius: '15px', p: 2, border: '1px solid #E2E8F0' }}>
             <Box component="img" src="https://i.imgur.com/your-schedule-ui.png" sx={{ width: '100%' }} /> 
             <Typography variant="caption" sx={{ color: '#64748B', display: 'block', textAlign: 'center', mt: 1 }}>
               Complex Schedule overview
             </Typography>
          </Box>
        </Paper>

        <Paper elevation={0} sx={{ p: 0, borderRadius: '25px', overflow: 'hidden' }}>
          <Box sx={{ height: 120, bgcolor: '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Box component="img" src="/placeholder-img.png" sx={{ width: 40, opacity: 0.3 }} />
          </Box>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>New Course</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Box>
                <Typography sx={{ fontWeight: 900, fontSize: '1.2rem' }}>105</Typography>
                <Typography variant="caption" sx={{ color: '#64748B' }}>Duration</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 900, fontSize: '1.2rem' }}>68</Typography>
                <Typography variant="caption" sx={{ color: '#64748B' }}>Academy</Typography>
              </Box>
            </Box>
            <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block', mt: 2 }}>New Course placeholder</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Courses;