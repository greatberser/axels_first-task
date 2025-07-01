import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';
import expensesReducer from './ducks/expenses';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
