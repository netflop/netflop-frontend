import { type RootState } from '@/store';

export const selectIsDarkMode = (state: RootState) => state.darkMode.isDarkMode;
