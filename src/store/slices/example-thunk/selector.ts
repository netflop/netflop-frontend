import { type RootState } from '@/store';

export const selectNumber = (state: RootState) => state.exampleThunk.number;
