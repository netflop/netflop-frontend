'use client';

import { AnimatePresence } from 'framer-motion';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import FadeInSpan from './animations/FadeInSpan';
import tw from '@/common/utils/classUtil';

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={tw([
        'absolute',
        'top-1/2',
        'left-1/2',
        '-translate-x-1/2',
        '-translate-y-1/2',
        'w-6',
        'h-6'
      ])}
    >
      {children}
    </div>
  );
};

const DarkModeToggleButton = (props: Props) => {
  return (
    <button
      className={tw([
        'relative',
        'w-8',
        'h-8',
        'rounded-full',
        'text-teal-600',
        'dark:bg-neutral-600',
        'dark:bg-opacity-25'
      ])}
      onClick={props.onClick}
    >
      <IconWrapper>
        <AnimatePresence>
          {props.isDarkMode &&
            <FadeInSpan>
              <MoonIcon />
            </FadeInSpan>}
        </AnimatePresence>
      </IconWrapper>
      <IconWrapper>
        <AnimatePresence>
          {!props.isDarkMode &&
            <FadeInSpan>
              <SunIcon />
            </FadeInSpan>}
        </AnimatePresence>
      </IconWrapper>
    </button>
  );
};

export default DarkModeToggleButton;

type Props = {
  isDarkMode: boolean;
  onClick: () => void;
};
