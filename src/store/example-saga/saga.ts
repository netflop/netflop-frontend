import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { actions, ActionTypes, type Action } from './action';

export function* startAsync(action: Action) {
  try {
    const range = action.payload.range;
    const number = Math.floor(Math.random() * range);
    const payload = {
      number
    };

    yield put(actions.successAsync(payload));
    return;
  } catch (error) {
    yield put(actions.errorAsync());
  } finally {
    yield put(actions.finishAsync());
  }
}

export function* finishAsync() {
  try {
    return;
  } catch (error) {
    return;
  }
}

export default function* authSaga() {
  yield takeLatest(ActionTypes.START_ASYNC, startAsync);
  yield takeEvery(ActionTypes.FINISH_ASYNC, finishAsync);
}
