import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
// @ts-ignore
import rootSaga from './saga';
import expensesReducer from './ducks/expenses';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Типи для useSelector та useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
