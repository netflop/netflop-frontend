import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, ReduxDispatch } from '@/store';

// Use throughout the app instead of plain `useDispatch` and `useSelector` because typescript requires typed dispatch
export const useAppDispatch: () => ReduxDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
