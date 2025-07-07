import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Expense = {
  id: number;
  category: string;
  amount: number;
  date: string;
};

export type ExpensesState = {
  list: Expense[];
  status: 'idle' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: ExpensesState = {
  list: [
    { id: 1, category: 'Food', amount: 15, date: '2024-04-01' },
    { id: 2, category: 'Food', amount: 50, date: '2025-01-01' },
    { id: 3, category: 'Transport', amount: 20, date: '2025-01-02' },
    { id: 4, category: 'Entertainment', amount: 100, date: '2025-01-03' },
    { id: 5, category: 'Utilities', amount: 75, date: '2025-01-04' },
  ],
  status: 'idle',
  error: null,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpenseRequest(state, action: PayloadAction<Expense>) {
      state.list.push(action.payload);
    },
    addExpenseSuccess(state, action: PayloadAction<Expense>) {
      state.status = 'succeeded';
      state.list.push(action.payload);
    },
    addExpenseFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { addExpenseRequest, addExpenseSuccess, addExpenseFailure } =
  expensesSlice.actions;

export default expensesSlice.reducer;
