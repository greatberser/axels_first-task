import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Tracker
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <MuiLink component={Link} to="/" color="inherit" underline="none">
            Home
          </MuiLink>
          <MuiLink component={Link} to="/form" color="inherit" underline="none">
            Form
          </MuiLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
