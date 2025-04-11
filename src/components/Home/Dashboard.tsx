import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import {
  Vaccines,
  MedicalInformation,
  LocalHospital,
  Favorite,
  BarChart,
  Logout,
} from '@mui/icons-material';

const Dashboard: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (err) {
        alert('Unauthorized');
      }
    };
    fetchUser();
  }, []);

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorElUser(null);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-profile">
          <Avatar
            alt="User Avatar"
            src="https://via.placeholder.com/80" // Replace with actual user image URL
            className="user-avatar"
          />
          <div className="user-info">
            <Typography variant="h6" className="user-name">
              {user.name}
            </Typography>
            <Typography variant="body2" className="user-email">
              {user.email}
            </Typography>
          </div>
        </div>
        <List className="sidebar-options">
          <ListItem button>
            <ListItemIcon>
              <Vaccines />
            </ListItemIcon>
            <ListItemText primary="Vaccination Info" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MedicalInformation />
            </ListItemIcon>
            <ListItemText primary="Health Tips" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalHospital />
            </ListItemIcon>
            <ListItemText primary="Nearby Centers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Favorite />
            </ListItemIcon>
            <ListItemText primary="Health Insights" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <AppBar position="static" className="dashboard-appbar">
          <Toolbar>
            <Typography variant="h6" className="dashboard-title">
              VaxAI Bharat Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3} className="dashboard-grid">
          {/* User Information */}
          <Grid item xs={12} md={4}>
            <Paper className="dashboard-card">
              <Typography variant="h6" className="card-title">
                User Information
              </Typography>
              <Typography>Name: {user.name}</Typography>
              <Typography>DOB: 1990-01-01</Typography>
              <Typography>Contact: {user.email}</Typography>
              <Button variant="contained" color="primary" className="update-button">
                Update Info
              </Button>
            </Paper>
          </Grid>

          {/* Vaccination Progress */}
          <Grid item xs={12} md={4}>
            <Paper className="dashboard-card">
              <Typography variant="h6" className="card-title">
                Vaccination Progress
              </Typography>
              <Box className="progress-container">
                <CircularProgress variant="determinate" value={75} size={80} />
                <Typography variant="h6" className="progress-text">
                  75%
                </Typography>
              </Box>
              <Typography>Next Vaccine: Hepatitis B</Typography>
              <Typography>Due Date: 2025-05-15</Typography>
            </Paper>
          </Grid>

          {/* Analytics */}
          <Grid item xs={12} md={4}>
            <Paper className="dashboard-card">
              <Typography variant="h6" className="card-title">
                Analytics
              </Typography>
              <Typography>Total Vaccines Taken: 5</Typography>
              <Typography>Upcoming Vaccines: 2</Typography>
              <Typography>Missed Vaccines: 1</Typography>
              <Button variant="contained" color="secondary" className="details-button">
                View Details
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>

      {/* Vaccine Suggestion Interface */}
      <div className="vaccine-suggestion">
        <Typography variant="h6" className="suggestion-title">
          Vaccine Suggestions
        </Typography>
        <Paper className="suggestion-card">
          <Typography variant="body1">Based on your age and health history:</Typography>
          <ul>
            <li>Hepatitis B - Due: 2025-05-15</li>
            <li>Influenza - Recommended annually</li>
            <li>COVID-19 Booster - Due: 2025-08-01</li>
          </ul>
          <Button variant="contained" color="primary" className="schedule-button">
            Schedule Vaccination
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
