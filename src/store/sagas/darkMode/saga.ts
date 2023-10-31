import { takeLatest, select } from 'redux-saga/effects';
import { ActionTypes, type Action } from './action';
import { selectIsDarkMode } from './selector';
import { localStorageKeys } from '@/common/constants';

export function* toggle(action: Action) {
  try {
    const isDarkMode: ReturnType<typeof selectIsDarkMode> = yield select(selectIsDarkMode);

    localStorage.setItem(localStorageKeys.IS_DARK_MODE, Number(isDarkMode).toString());

    return;
  } catch (error) {
    return;
  } finally {
    return;
  }
}

export default function* authSaga() {
  yield takeLatest(ActionTypes.TOGGLE, toggle);
}
