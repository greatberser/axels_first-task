import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const NavbarContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Navbar = () => {
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
