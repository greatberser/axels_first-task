import styled from 'styled-components';
import { Box, TextField } from '@mui/material';

export const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: auto;
  padding: 16px;
`;

export const StyledTextField = styled(TextField)`
  label {
    display: none;
  }
`;
