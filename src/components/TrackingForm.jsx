import { Box, Button, TextField, MenuItem } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
const categories = [
  'Food',
  'Transport',
  'Entertainment',
  'Utilities',
  'Health',
];

const validationSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be a positive number'),
  date: Yup.date()
    .max(new Date(), 'Date cannot be in the future')
    .required('Date is required'),
});

export const TrackingForm = () => {
  console.log('TrackingForm rendered');
  return (
    <Formik
      initialValues={{ category: '', amount: '', date: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, action) => {
        console.log('Saved:', values);
        action.resetForm();
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
      }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
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
            name="date"
            label="Date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.date && Boolean(errors.date)}
            helperText={touched.date && errors.date}
            type="date"
            required
          />
          {/* <TextField
            label="Date"
            type="date"
            variant="outlined"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          /> */}

          <TextField
            select
            name="category"
            label="Category"
            value={values.category}
            onChange={handleChange}
            error={touched.category && Boolean(errors.category)}
            helperText={touched.category && errors.category}
            required
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          {/* <TextField label="Category" select variant="outlined" size="small">
            {['Food', 'Transport', 'Entertainment', 'Utilities', 'Health'].map(
              (category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              )
            )}
          </TextField> */}
          <TextField
            name="amount"
            label="Amount"
            type="number"
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.amount && Boolean(errors.amount)}
            helperText={touched.amount && errors.amount}
            required
          />
          {/* <TextField
            label="Amount"
            type="number"
            variant="outlined"
            size="small"
          /> */}
          <Button variant="contained" color="primary">
            Add Expense
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default TrackingForm;
