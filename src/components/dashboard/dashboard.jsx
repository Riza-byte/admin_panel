import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Avatar, Paper, Grid } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import KeyIcon from '@mui/icons-material/Key';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const primaryBlue = '#002B5C';
const secondaryYellow = '#FFD700';

const lineData = [
  { name: 'Jan', value: 20 }, { name: 'Feb', value: 120 }, { name: 'Mar', value: 110 },
  { name: 'Apr', value: 70 }, { name: 'May', value: 140 }, { name: 'Jun', value: 120 }, { name: 'Jul', value: 200 },
];

const StatCard = ({ icon, value, text, color, iconColor = '#fff' }) => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: 3, 
      display: 'flex', 
      alignItems: 'center', 
      gap: 3, 
      borderRadius: '30px', 
      bgcolor: '#fff',
      width: '100%',
      height: '100px' // Balandlikni bir xil qilish uchun
    }}
  >
    <Avatar sx={{ bgcolor: color, color: iconColor, width: 60, height: 60 }}>
      {React.cloneElement(icon, { sx: { fontSize: 30 } })}
    </Avatar>
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 900, color: '#1A2027', lineHeight: 1 }}>{value}</Typography>
      <Typography variant="body2" sx={{ color: '#707E94', fontWeight: 600 }}>{text}</Typography>
    </Box>
  </Paper>
);

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 1 }}> {/* Padding kamaytirildi, chunki Layoutda bor */}
      
      {/* 1. KARTOCHKALAR QATORI */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4} lg={2.4}><StatCard icon={<BarChartIcon />} value="55" text="Academy" color={primaryBlue} /></Grid>
        <Grid item xs={12} md={4} lg={2.4}><StatCard icon={<GroupsIcon />} value="113" text="Students" color={primaryBlue} /></Grid>
        <Grid item xs={12} md={4} lg={2.4}><StatCard icon={<SchoolIcon />} value="162" text="Teachers" color={primaryBlue} /></Grid>
        <Grid item xs={12} md={6} lg={2.4}><StatCard icon={<KeyIcon />} value="473" text="Courses" color={primaryBlue} /></Grid>
        <Grid item xs={12} md={6} lg={2.4}><StatCard icon={<BarChartIcon />} value="68" text="Academy" color={secondaryYellow} /></Grid>
      </Grid>

      {/* 2. GRAFIK VA RO'YXAT QATORI */}
      <Grid container spacing={3}>
        {/* Performance Overview */}
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: '30px', minHeight: '350px' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Performance Overview</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9BA3AF', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9BA3AF', fontSize: 12}} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke={primaryBlue} strokeWidth={4} dot={{ r: 4, fill: primaryBlue }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Top Students */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: '30px', height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Top Students</Typography>
            <List sx={{ p: 0 }}>
              {['Bekzod Akramov', 'Malika Olimova', 'Sardor Umarov'].map((name, i) => (
                <ListItem key={i} disablePadding sx={{ mb: 2.5 }}>
                  <Avatar sx={{ mr: 2, width: 45, height: 45, bgcolor: '#E2E8F0', color: '#1A2027', fontWeight: 700 }}>{name[0]}</Avatar>
                  <ListItemText primary={name} primaryTypographyProps={{ fontWeight: 700 }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;