import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar, AppBar, Toolbar, IconButton, InputBase, Paper } from '@mui/material';
import { Link, useLocation, Outlet } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import QuizIcon from '@mui/icons-material/Quiz';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 260;
const primaryBlue = '#002B5C';
const secondaryYellow = '#FFD700';

const menuItems = [
  { text: 'Home', icon: <SchoolIcon />, path: '/home' },
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Students', icon: <PeopleIcon />, path: '/students' },
  { text: 'Teachers', icon: <LibraryBooksIcon />, path: '/teachers' },
  { text: 'Courses', icon: <QuizIcon />, path: '/courses' },
  { text: 'Mock Tests', icon: <AssessmentIcon />, path: '/mock-tests' },
  { text: 'Reports', icon: <BarChartIcon />, path: '/reports' }
];

const Layout = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F4F7FC' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', border: 'none' },
        }}
      >
        <Box sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ width: 40, height: 40, bgcolor: primaryBlue, borderRadius: '10px' }} />
          <Typography variant="h6" sx={{ color: primaryBlue, fontWeight: 900, fontSize: '0.9rem' }}>
            CAMBRIDGE ACADEMY
          </Typography>
        </Box>
        <List sx={{ px: 2 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton 
                  component={Link} 
                  to={item.path}
                  sx={{ 
                    borderRadius: '12px',
                    bgcolor: isActive ? secondaryYellow : 'transparent',
                    color: isActive ? '#000' : '#707E94'
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: isActive ? 800 : 600 }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: primaryBlue }}>Admin panel</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Paper sx={{ p: '8px 20px', display: 'flex', alignItems: 'center', width: 350, borderRadius: '30px', bgcolor: '#fff' }}>
              <InputBase sx={{ flex: 1 }} placeholder="Search..." />
              <IconButton><SearchIcon /></IconButton>
            </Paper>
            <Typography sx={{ fontWeight: 800, color: primaryBlue }}>Alibi</Typography>
            <Avatar sx={{ bgcolor: primaryBlue }}>A</Avatar>
          </Box>
        </Box>
        
        {/* Sahifalar shu yerga tushadi */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;