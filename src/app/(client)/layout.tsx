'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tw from '@/common/utils/classUtil';
import { selector as darkModeSelector, actions as darkModeActions } from '@/store/sagas/darkMode';
import './style.css';
import { localStorageKeys } from '@/common/constants';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useSelector(darkModeSelector.selectIsDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const isDarkMode = localStorage.getItem(localStorageKeys.IS_DARK_MODE);

    if (isDarkMode) {
      dispatch(darkModeActions.setDarkMode({ isDarkMode: Boolean(Number(isDarkMode)) }));
    }
  }, [dispatch]);

  return (
    <main className={tw([isDarkMode ? 'dark' : ''])}>
      <div
        className={tw([
          'box-border',
          'w-full',
          'min-h-screen',
          'flex',
          'flex-col',
          'bg-neutral-100',
          'dark:bg-neutral-800',
          'overflow-auto',
          'transition-all'
        ])}
      >
        {children}
      </div>
    </main>
  );
};

export default ClientLayout;
