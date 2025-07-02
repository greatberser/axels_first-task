import styled from 'styled-components';
import { TextField } from '@mui/material';

export const FilterRow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 16px;
`;

export const SelectInput = styled(TextField)`
  width: 200px;
`;
