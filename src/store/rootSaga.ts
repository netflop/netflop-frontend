import { all, fork } from 'redux-saga/effects';
import { saga as exampleSaga } from './sagas/example-saga';
import { saga as darkModeSaga } from './sagas/darkMode';

const forkEffect = [
  fork(exampleSaga.default),
  fork(darkModeSaga.default)
];

export default function* rootSaga() {
  yield all(forkEffect);
}
