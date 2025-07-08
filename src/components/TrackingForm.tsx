import { Button, TextField, MenuItem } from '@mui/material';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../graphql/queries';

import { InputContainer, StyledTextField } from '../styled/TrackingForm';

const categories = [
  'Food',
  'Transport',
  'Entertainment',
  'Utilities',
  'Health',
];

type FormValues = {
  category: string;
  amount: number | '';
  date: string;
};

const validationSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be a positive number'),
  date: Yup.date()
    .max(new Date(), 'Date cannot be in the future')
    .required('Date is required'),
});

const TrackingForm: React.FC = () => {
  const [addExpense] = useMutation(ADD_EXPENSE);

  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    try {
      addExpense({
        variables: {
          date: values.date,
          category: values.category,
          amount: parseFloat(values.amount.toString()),
        },
      });
      actions.resetForm();
    } catch (error) {
      console.error('Error adding expense:', error);
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik<FormValues>
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
        <InputContainer as="form" onSubmit={handleSubmit}>
          <TextField
            name="date"
            id="date"
            type="date"
            label="Date"
            InputLabelProps={{
              shrink: true,
            }}
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.date && Boolean(errors.date)}
            helperText={touched.date && errors.date}
          />
          <TextField
            select
            name="category"
            label="Category"
            value={values.category}
            onChange={handleChange}
            error={touched.category && Boolean(errors.category)}
            helperText={touched.category && errors.category}
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
          />
          <Button type="submit">Add Expense</Button>
        </InputContainer>
      )}
    </Formik>
  );
};

export default TrackingForm;
