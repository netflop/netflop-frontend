import { type AppState } from '@/store';

export const selectNumber = (state: AppState) => state.exampleThunk.number;
