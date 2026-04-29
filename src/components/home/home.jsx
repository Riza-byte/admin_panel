import React from 'react';
import { Box, Typography, Grid, Paper, Button, List, ListItem, Avatar, ListItemText, Divider } from '@mui/material';
// Ikonka nomlarini to'g'irladik:
import AddCircleIcon from '@mui/icons-material/AddCircle'; 
import AssignmentIcon from '@mui/icons-material/Assignment';
import CampaignIcon from '@mui/icons-material/Campaign';

const primaryBlue = '#002B5C';

const Home = () => {
  return (
    <Box sx={{ p: 1 }}>
      {/* Welcome Header */}
      <Paper elevation={0} sx={{ p: 4, borderRadius: '30px', bgcolor: primaryBlue, color: '#fff', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>Welcome back, Alibi! 👋</Typography>
        <Typography variant="body1" sx={{ opacity: 0.8 }}>
          Everything looks great today. You have 5 new student registrations and 2 mock tests scheduled.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: primaryBlue }}>Quick Actions</Typography>
          <Grid container spacing={2}>
            {[
              { label: 'Add New Student', icon: <AddCircleIcon />, color: '#EBF2FA' },
              { label: 'Create Mock Test', icon: <AssignmentIcon />, color: '#FFF9E6' },
              { label: 'Post Announcement', icon: <CampaignIcon />, color: '#F0FDF4' },
            ].map((action, i) => (
              <Grid item xs={4} key={i}>
                <Paper elevation={0} sx={{ p: 3, textAlign: 'center', borderRadius: '25px', cursor: 'pointer', '&:hover': { bgcolor: action.color } }}>
                  <Avatar sx={{ bgcolor: '#fff', color: primaryBlue, mx: 'auto', mb: 1.5, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    {action.icon}
                  </Avatar>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>{action.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Paper elevation={0} sx={{ mt: 3, p: 3, borderRadius: '30px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #E0E7FF' }}>
            <Typography sx={{ color: '#94A3B8' }}>System Status: All systems operational ✅</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: '30px', height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Recent Activity</Typography>
            <List>
              {[
                { user: 'John Doe', action: 'registered as a student', time: '2 mins ago' },
                { user: 'IELTS Mock V2', action: 'was published', time: '1 hour ago' },
                { user: 'Sarah Connor', action: 'completed Reading Test', time: '3 hours ago' },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                    <Avatar sx={{ mr: 2, bgcolor: '#F1F5F9', color: primaryBlue }}>{item.user[0]}</Avatar>
                    <ListItemText 
                      primary={<Typography sx={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.user}</Typography>}
                      secondary={item.action}
                    />
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>{item.time}</Typography>
                  </ListItem>
                  {i < 2 && <Divider variant="inset" component="li" sx={{ ml: 7 }} />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;