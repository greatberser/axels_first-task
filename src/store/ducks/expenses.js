import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    list: [
      { id: 1, category: 'Food', amount: 50, date: '2025-01-01' },
      { id: 2, category: 'Transport', amount: 20, date: '2025-01-02' },
      { id: 3, category: 'Entertainment', amount: 100, date: '2025-01-03' },
      { id: 4, category: 'Utilities', amount: 75, date: '2025-01-04' },
    ],
    status: 'idle',
    error: null,
  },
  reducers: {
    addExpenseRequest(state, action) {
      state.list.push(action.payload);
    },
    addExpenseSuccess(state, action) {
      state.status = 'succeeded';
      state.list.push(action.payload);
    },
    addExpenseFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('ADD_EXPENSE_SUCCESS', (state, action) => {
      state.status = 'succeeded';
      state.list.push(action.payload);
    });
  },
});

export const { addExpenseRequest, addExpenseSuccess, addExpenseFailure } =
  expensesSlice.actions;

export default expensesSlice.reducer;
