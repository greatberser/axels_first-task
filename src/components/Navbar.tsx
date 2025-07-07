import { AppBar, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

import { StyledToolbar, NavbarContainer } from '../styled/Navbar';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" component="div">
          Tracker
        </Typography>
        <NavbarContainer>
          <MuiLink component={Link} to="/" color="inherit" underline="none">
            Home
          </MuiLink>
          <MuiLink component={Link} to="/form" color="inherit" underline="none">
            Form
          </MuiLink>
        </NavbarContainer>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
