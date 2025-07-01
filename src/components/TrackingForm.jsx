import { Box, Button, TextField, MenuItem } from '@mui/material';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { addExpenseRequest } from '../store/ducks/expenses';
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

const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: auto;
  padding: 16px;
`;

const TrackingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    dispatch(addExpenseRequest({ ...values, id: Date.now() }));
    actions.resetForm();
    navigate('/');
    console.log('Submitting:', expense);
  };

  return (
    <Formik
      initialValues={{ category: '', amount: '', date: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
      }) => (
        <InputContainer component="form" onSubmit={handleSubmit}>
          <TextField
            name="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.date && Boolean(errors.date)}
            helperText={touched.date && errors.date}
            type="date"
            required
          />
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
          <Button variant="contained" color="primary" type="submit">
            Add Expense
          </Button>
        </InputContainer>
      )}
    </Formik>
  );
};

export default TrackingForm;
