'use client';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import tw from '@/common/utils/classUtil';
import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import DarkModeToggleButton from '@/components/client/DarkModeToggleButton';
import { selector as darkModeSelector, actions as darkModeActions } from '@/store/sagas/darkMode';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector(darkModeSelector.selectIsDarkMode);

  const onDarkModeToggle = () => {
    dispatch(darkModeActions.toggle());
  };

  return (
    <>
      <Header>
        <div className={tw([
          'flex',
          'items-center',
          'h-full',
          'p-2'
        ])}>
          <Link href={'/'}>
            <span
              className={tw([
                'text-2xl',
                'text-rose-600',
                'font-semibold'
              ])}
            >
              Netflop
            </span>
          </Link>
          <span className={tw(['ml-auto'])}>
            <DarkModeToggleButton
              isDarkMode={isDarkMode}
              onClick={onDarkModeToggle}
            />
          </span>
        </div>
      </Header>
      <div className={tw([
        'flex-grow'
      ])}>
        {children}
      </div>
      <Footer>
      </Footer>
    </>
  );
};

export default AuthLayout;
