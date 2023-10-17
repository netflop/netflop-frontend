import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReduxThunkAction } from '@/store';
import { selectNumber } from './selector';
import { slice } from './slice';

// thunks
export const startIfOdd =
  (payload: StartPayload): ReduxThunkAction =>
    (dispatch, getState) => {
      const state = getState();
      const currentNumber = selectNumber(state);

      if (isOdd(currentNumber)) {
        const number = Math.floor(Math.random() * payload.range);
        dispatch(slice.actions.start({ number }));
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
const isOdd = (number: number | null) => {
  return number !== null && number % 2 === 1
}
/* eslint-enable*/
