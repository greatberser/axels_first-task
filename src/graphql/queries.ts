import { gql } from '@apollo/client';

export const GET_EXPENSES = gql`
  query GetAllExpenses {
    expenses {
      id
      date
      category
      amount
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation AddExpense($date: String!, $category: String!, $amount: Float!) {
    addExpense(date: $date, category: $category, amount: $amount) {
      id
      date
      category
      amount
    }
  }
`;
