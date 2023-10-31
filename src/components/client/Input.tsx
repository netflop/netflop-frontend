import { FC, useEffect, useRef } from 'react';
import tw from '@/common/utils/classUtil';
import { AUTO_FOCUS_INPUT_DELAY } from '@/common/constants';

const Input: Input = ({ isFocusedOnMount, ...props }) => {
  const ref = useRef<HTMLInputElement>(null);
  const timoutId = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (isFocusedOnMount && ref.current) {
      timoutId.current = window.setTimeout(() => {
        ref.current?.focus();
      }, AUTO_FOCUS_INPUT_DELAY);
    }

    return () => {
      window.clearTimeout(timoutId.current);
    };
  }, [isFocusedOnMount]);

  return (
    <input
      {...props}
      className={tw([
        'outline-none',
        'bg-transparent',
        'w-full',
        'px-4',
        'py-2',
        'rounded-md'
      ])}
      ref={ref}
    />
  );
};

export default Input;

type Input = FC<React.InputHTMLAttributes<HTMLInputElement> & { isFocusedOnMount?: boolean }>;
