import { Box, Button, TextField } from '@mui/material';
import styled from 'styled-components';

const FilterRow = styled(Box)`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 16px;
`;

const categories = [
  'All',
  'Food',
  'Transport',
  'Entertainment',
  'Utilities',
  'Health',
];

export const FilterPanel = () => {
  return (
    <FilterRow>
      <TextField
        label="Start Date"
        type="date"
        variant="outlined"
        size="small"
        sx={{ width: '200px' }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        select
        label="Category"
        variant="outlined"
        size="small"
        sx={{ width: '200px' }}
        SelectProps={{
          native: true,
        }}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </TextField>
      <Button variant="contained" color="primary">
        Apply Filters
      </Button>
    </FilterRow>
  );
};

export default FilterPanel;
