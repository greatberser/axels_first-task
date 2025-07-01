import { Box, Button, TextField } from '@mui/material';
import styled from 'styled-components';

const FilterRow = styled(Box)`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 16px;
`;

const FilterInput = styled(TextField)`
  width: 200px;
`;

const categories = [
  'All',
  'Food',
  'Transport',
  'Entertainment',
  'Utilities',
  'Health',
];

const FilterPanel = () => {
  return (
    <FilterRow>
      <TextField type="date" variant="outlined" size="small" />
      <FilterInput select label="Category" variant="outlined" size="small">
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </FilterInput>
      <Button variant="contained" color="primary">
        Apply Filters
      </Button>
    </FilterRow>
  );
};

export default FilterPanel;
