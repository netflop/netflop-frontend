import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { startAsync } from './thunk';

const initialState: State = {
  loading: false,
  number: null
};

export const slice = createSlice({
  name: 'EXAMPLE_THUNK',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<StartPayload>) => {
      state.number = action.payload.number;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(startAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(startAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.number = action.payload.number;
      })
      .addCase(startAsync.rejected, (state) => {
        state.loading = false;
      });
  }
});

export type State = {
  loading: boolean;
  number: number | null;
};
export type StartPayload = {
  number: number;
};
