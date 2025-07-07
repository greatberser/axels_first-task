import { useState } from 'react';
import { Button, MenuItem, TextField } from '@mui/material';

import { FilterRow, SelectInput } from '../styled/FilterPanel';

export type FilterData = {
  date: string;
  category: string;
};

type FilterPanelProps = {
  onFilter: (data: FilterData) => void;
};

const categories = [
  'All',
  'Food',
  'Transport',
  'Entertainment',
  'Utilities',
  'Health',
];

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilter }) => {
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
        label="Date"
        InputLabelProps={{ shrink: true }}
        id="date"
        variant="outlined"
        size="small"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <SelectInput
        select
        label="Category"
        id="category"
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
