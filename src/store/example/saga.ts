import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { actions, ActionTypes, type Action } from './action';

export function* exampleStartAsync(action: Action) {
  try {
    const range = action.payload.range;
    const number = Math.floor(Math.random() * range);
    const payload = {
      number
    };

    yield put(actions.exampleSuccessAsync(payload));
    return;
  } catch (error) {
    yield put(actions.exampleErrorAsync());
  } finally {
    yield put(actions.exampleFinishAsync());
  }
}

export function* exampleFinishAsync() {
  try {
    return;
  } catch (error) {
    return;
  }
}

export default function* authSaga() {
  yield takeLatest(ActionTypes.EXAMPLE_START_ASYNC, exampleStartAsync);
  yield takeEvery(ActionTypes.EXAMPLE_FINISH_ASYNC, exampleFinishAsync);
}
