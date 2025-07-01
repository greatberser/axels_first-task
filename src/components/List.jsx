import { List, ListItem, ListItemText, Typography } from '@mui/material';
import exp from 'constants';
import styled from 'styled-components';

const EmptyMess = styled.h4`
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const StyledItem = styled(ListItem)`
  && {
    background-color: #f9f9f9;
    margin: 0.5rem 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: #e9e9e9;
    }
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Category = styled(ListItemText)`
  && {
    font-weight: bold;
    color: #333;
    font-size: 1rem;
  }
`;

const DateText = styled(Typography)`
  && {
    font-size: 0.9rem;
    color: #666;
    margin-right: 1rem;
  }
`;

const AmountText = styled.span`
  font-weight: bold;
  color: #4caf50;
  font-size: 1.2rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
`;

const ExpenseList = ({ expenses }) => {
  if (!expenses || expenses.length === 0) {
    return <EmptyMess>No found</EmptyMess>;
  }
  return (
    <List>
      {expenses.map((expense) => (
        <StyledItem key={expense.id} divider>
          <LeftSide>
            <Category variant="subtitle1">{expense.category}</Category>
            <DateText>{expense.date}</DateText>
          </LeftSide>
          <AmountText>{Number(expense.amount).toFixed(2)}</AmountText>
        </StyledItem>
      ))}
    </List>
  );
};

export default ExpenseList;
