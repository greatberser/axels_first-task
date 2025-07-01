import { List, ListItem, ListItemText } from '@mui/material';
import styled from 'styled-components';

const EmptyMess = styled.h4`
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const ExpenseList = ({ expenses }) => {
  if (!expenses || expenses.length === 0) {
    return <EmptyMess>No found</EmptyMess>;
  }
  return (
    <List>
      {expenses.map((expense) => (
        <ListItem key={expense.id} divider>
          <ListItemText
            primary={`${expense.date} - ${expense.category}`}
            secondary={`${expense.amount.toFixed(2)}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
