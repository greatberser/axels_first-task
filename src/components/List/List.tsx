import { List, ListItem, ListItemText, Typography } from '@mui/material';
import type { Expense } from '../../store/ducks/expenses';
import {
  StyledItem,
  LeftSide,
  Category,
  DateText,
  AmountText,
  EmptyMess,
} from '../../styled/List';

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  if (!expenses || expenses.length === 0) {
    return <EmptyMess>No found</EmptyMess>;
  }
  return (
    <List>
      {expenses.map((expense) => (
        <StyledItem key={expense.id} divider>
          <LeftSide>
            <Category>{expense.category}</Category>
            <DateText>{expense.date}</DateText>
          </LeftSide>
          <AmountText>{Number(expense.amount).toFixed(2)}</AmountText>
        </StyledItem>
      ))}
    </List>
  );
};

export default ExpenseList;
