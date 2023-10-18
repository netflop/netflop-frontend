import { all, fork } from 'redux-saga/effects';
import { saga as exampleSaga } from './sagas/example-saga';

const forkEffect = [fork(exampleSaga.default)];

export default function* rootSaga() {
  yield all(forkEffect);
}
