import { Box, Button, TextField, MenuItem } from '@mui/material';

export const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
      }}
    >
      <TextField
        label="Date"
        type="date"
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField label="Category" select variant="outlined" size="small">
        {['Food', 'Transport', 'Entertainment', 'Utilities', 'Health'].map(
          (category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          )
        )}
      </TextField>
      <TextField label="Amount" type="number" variant="outlined" size="small" />
      <Button variant="contained" color="primary">
        Add Expense
      </Button>
    </Box>
  );
};

export default Form;
