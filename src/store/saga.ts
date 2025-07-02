import { all, put, takeEvery } from 'redux-saga/effects';

function apiAddExpenses(data: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

function* sagaAddExpenses(action: any) {
  console.log('sagaAddExpenses', action.payload);
  yield put({ type: 'ADD_EXPENSE_SUCCESS', payload: action.payload });
}

export function* watchAddExpenses() {
  yield takeEvery('ADD_EXPENSES_REQUEST', sagaAddExpenses);
}

export default function* rootSaga() {
  yield all([watchAddExpenses()]);
}
