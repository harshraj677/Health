import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Header.css'; // Custom CSS for styling

const healthcareOptions = ['Vaccination Info', 'Health Tips', 'Emergency Contacts'];
const navigationButtons = ['Home', 'News', 'Sign Up', 'Login']; // Changed "Sign In" to "Sign Up"

const Header: React.FC = () => {
  const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElMenu(null);
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (button: string) => {
    if (button === 'Sign Up') {
      navigate('/signup'); // Redirect to SignUp page
    } else if (button === 'Login') {
      navigate('/login'); // Redirect to Login page
    } else if (button === 'Home') {
      navigate('/'); // Redirect to Home page
    } else if (button === 'News') {
      navigate('/news'); // Redirect to News page
    }
  };

  return (
    <AppBar position="static" className="app-bar">
      <Toolbar>
        {/* Left: 3-horizontal-line menu */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElMenu}
          open={Boolean(anchorElMenu)}
          onClose={handleMenuClose}
        >
          {healthcareOptions.map((option) => (
            <MenuItem key={option} onClick={handleMenuClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>

        {/* Center: App Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className="app-title"
        >
          VaxAI Bharat
        </Typography>

        {/* Right: Navigation Buttons */}
        <Box className="nav-buttons">
          {navigationButtons.map((button) => (
            <Button
              key={button}
              color="inherit"
              className="nav-button"
              onClick={() => handleNavigation(button)} // Add navigation logic
            >
              {button}
            </Button>
          ))}
        </Box>

        {/* User Avatar and Settings */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleUserMenuOpen} sx={{ p: 0 }}>
              <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleUserMenuClose}
          >
            <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Account</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;