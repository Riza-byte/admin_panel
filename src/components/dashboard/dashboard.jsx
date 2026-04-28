import React from 'react';
import { Box, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, InputBase, Paper, Grid, IconButton, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

// Ikonkalar
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import QuizIcon from '@mui/icons-material/Quiz';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SearchIcon from '@mui/icons-material/Search';
import CircleIcon from '@mui/icons-material/Circle';
import BarChartIcon from '@mui/icons-material/BarChart';
import KeyIcon from '@mui/icons-material/Key';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

// Recharts grafiklari
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const drawerWidth = 260; // Sidebar biroz kengaytirildi
const primaryBlue = '#003366'; 
const secondaryYellow = '#FFD700'; 
const bgColor = '#F0F7FF'; // Yanada yumshoqroq fon rangi

const menuItems = [
  { text: 'Home', icon: <SchoolIcon />, path: '/home' },
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Students', icon: <PeopleIcon />, path: '/students' },
  { text: 'Teachers', icon: <LibraryBooksIcon />, path: '/teachers' },
  { text: 'Courses', icon: <QuizIcon />, path: '/courses' },
  { text: 'Mock Tests', icon: <AssessmentIcon />, path: '/mock-tests' },
  { text: 'Reports', icon: <BarChartIcon />, path: '/reports' },
  { text: 'Settings', icon: <NotificationsNoneIcon />, path: '/settings' }
];

const lineData = [
  { name: 'Jan', value: 20 }, { name: 'Feb', value: 120 }, { name: 'Mar', value: 110 },
  { name: 'Apr', value: 70 }, { name: 'May', value: 140 }, { name: 'Jun', value: 120 }, { name: 'Jul', value: 200 },
];

// StatCard komponenti - Rasmga moslab to'liq o'zgartirildi
const StatCard = ({ icon, value, text, color, iconColor = '#fff' }) => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: '32px 24px', // Ichki padding sezilarli oshirildi
      display: 'flex', 
      alignItems: 'center', 
      gap: 2.5, 
      borderRadius: '24px', // Yumshoqroq burchaklar
      flex: 1, 
      minWidth: '220px', 
      bgcolor: '#fff',
      transition: '0.3s',
      '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }
    }}
  >
    <Avatar 
      sx={{ 
        bgcolor: color, 
        color: iconColor, 
        width: 65, // Ikonka doirasi kattalashtirildi
        height: 65,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}
    >
      {React.cloneElement(icon, { sx: { fontSize: 32 } })}
    </Avatar>
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 900, color: '#1A2027', mb: 0.5 }}>
        {value}
      </Typography>
      <Typography variant="body1" sx={{ color: '#707E94', fontWeight: 600 }}>
        {text}
      </Typography>
    </Box>
  </Paper>
);

const Dashboard = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: bgColor }}>
      
      {/* SIDEBAR */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', border: 'none', bgcolor: '#fff' },
        }}
      >
        <Box sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ width: 40, height: 40, bgcolor: primaryBlue, borderRadius: '10px' }} /> 
          <Typography variant="h6" sx={{ color: primaryBlue, fontWeight: 900, letterSpacing: '-0.5px' }}>
            CAMBRIDGE ACADEMY
          </Typography>
        </Box>

        <List sx={{ px: 2.5 }}>
          {menuItems.map((item) => {
            const isActive = item.text === 'Dashboard';
            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton 
                  component={Link} 
                  to={item.path}
                  sx={{ 
                    borderRadius: '16px',
                    p: '12px 20px',
                    bgcolor: isActive ? secondaryYellow : 'transparent',
                    color: isActive ? '#000' : '#707E94',
                    '&:hover': { bgcolor: isActive ? secondaryYellow : '#F5F7FA' }
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: isActive ? 800 : 600 }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* MAIN CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, p: 6 }}>
        
        {/* HEADER */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: primaryBlue }}>Admin panel</Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Paper sx={{ p: '6px 20px', display: 'flex', alignItems: 'center', width: 350, borderRadius: '30px', bgcolor: '#fff', border: '1px solid #E0E7FF' }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
              <IconButton><SearchIcon /></IconButton>
            </Paper>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography sx={{ fontWeight: 800, color: primaryBlue }}>Alibi</Typography>
              <Avatar sx={{ bgcolor: primaryBlue, width: 45, height: 45 }}>A</Avatar>
            </Box>
          </Box>
        </Box>

        {/* KARTALAR BLOKI - Mana shu joyi rasmga moslashtirildi */}
        <Box sx={{ display: 'flex', gap: 3.5, mb: 6, width: '100%' }}>
          <StatCard icon={<BarChartIcon />} value="55" text="Academy" color="#F0F4FF" iconColor={primaryBlue} />
          <StatCard icon={<GroupsIcon />} value="113" text="Students" color="#F0F4FF" iconColor={primaryBlue} />
          <StatCard icon={<SchoolIcon />} value="162" text="Teachers" color="#F0F4FF" iconColor={primaryBlue} />
          <StatCard icon={<KeyIcon />} value="473" text="Courses" color="#FFF9E6" iconColor="#FFB800" />
          <StatCard icon={<BarChartIcon />} value="68" text="Academy" color={secondaryYellow} iconColor="#fff" />
        </Box>

        {/* GRAFIK QISMI */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 5, borderRadius: '32px' }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>Performance Overview</Typography>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9BA3AF', fontWeight: 500}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9BA3AF'}} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke={primaryBlue} strokeWidth={5} dot={{ r: 6, fill: primaryBlue, strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 5, borderRadius: '32px', height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>Top Students</Typography>
              <List sx={{ '& .MuiListItem-root': { mb: 2 } }}>
                {['Bekzod Akramov', 'Malika Olimova', 'Sardor Umarov'].map((name, i) => (
                  <ListItem key={i} disablePadding>
                    <Avatar sx={{ mr: 2.5, width: 48, height: 48, bgcolor: '#F0F4FF', color: primaryBlue, fontWeight: 700 }}>{name[0]}</Avatar>
                    <ListItemText primary={name} primaryTypographyProps={{ fontWeight: 700, color: '#1A2027' }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

      </Box>
    </Box>
  );
};

export default Dashboard;