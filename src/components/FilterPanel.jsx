import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const FilterRow = styled(Box)`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 16px;
`;

const SelectInput = styled(TextField)`
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

const FilterPanel = ({ onFilter }) => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('All');

  const handleFilter = () => {
    onFilter({
      date,
      category,
    });
  };

  return (
    <FilterRow>
      <TextField
        type="date"
        variant="outlined"
        size="small"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <SelectInput
        select
        label="Category"
        variant="outlined"
        size="small"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </SelectInput>
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Apply Filters
      </Button>
    </FilterRow>
  );
};

export default FilterPanel;
