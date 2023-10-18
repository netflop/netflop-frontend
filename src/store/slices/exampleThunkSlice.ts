import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ReduxThunkAction, type RootState } from '@/store';

// thunks
export const exampleThunkStartIfOdd =
  (payload: StartPayload): ReduxThunkAction =>
    (dispatch, getState) => {
      const state = getState();
      const currentNumber = exampleThunkSelectNumber(state);

      if (isOdd(currentNumber)) {
        dispatch(exampleThunkStartAsync({ range: payload.range }));
      }
    };

// async thunks
export const exampleThunkStartAsync = createAsyncThunk(
  'EXAMPLE_THUNK/START_ASYNC',
  async (payload: StartAsyncPayload) => {
    const number = Math.floor(Math.random() * payload.range);
    return {
      number
    };
  }
);

// selectors
export const exampleThunkSelectNumber = (state: RootState) => state.exampleThunk.number;

const initialState: State = {
  loading: false,
  number: null
};

const slice = createSlice({
  name: 'EXAMPLE_THUNK',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = initialState.loading;
      state.number = initialState.number;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(exampleThunkStartAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(exampleThunkStartAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.number = action.payload.number;
      })
      .addCase(exampleThunkStartAsync.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const exampleThunkActions = slice.actions;
export const exampleThunkReducer = slice.reducer;

type State = {
  loading: boolean;
  number: number | null;
};
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
