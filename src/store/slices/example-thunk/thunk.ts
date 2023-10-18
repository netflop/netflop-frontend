import { ReduxThunkAction } from '@/store';
import { selectNumber } from './selector';
import { actions } from './slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// thunks
export const startIfOdd =
  (payload: StartPayload): ReduxThunkAction =>
    (dispatch, getState) => {
      const state = getState();
      const currentNumber = selectNumber(state);

      if (isOdd(currentNumber)) {
        const number = Math.floor(Math.random() * payload.range);
        dispatch(actions.start({ number }));
      }
    };

// async thunks
export const startAsync = createAsyncThunk(
  'EXAMPLE_THUNK/START_ASYNC',
  async (payload: StartAsyncPayload) => {
    const number = Math.floor(Math.random() * payload.range);
    return {
      number
    };
  }
);

type StartPayload = {
  range: number;
};
type StartAsyncPayload = {
  range: number;
};

/* eslint-disable*/
// for example only, or we should do this way for utils
const isOdd = (number: number | null) => {
  return number !== null && number % 2 === 1
}
/* eslint-enable*/
