import { List, ListItem, ListItemText } from '@mui/material';

const expensesList = [
  { id: 1, date: '2025-06-01', category: 'Food', amount: 50 },
  { id: 2, date: '2025-06-02', category: 'Transport', amount: 20 },
  { id: 3, date: '2025-06-03', category: 'Entertainment', amount: 30 },
];

export const ExpenseList = ({ expenses = expensesList }) => {
  return (
    <List>
      {expenses.map((expense) => (
        <ListItem sx={{ color: 'black' }} key={expense.id} divider>
          <ListItemText
            primary={`${expense.date} - ${expense.category}`}
            secondary={`$${expense.amount.toFixed(2)}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
