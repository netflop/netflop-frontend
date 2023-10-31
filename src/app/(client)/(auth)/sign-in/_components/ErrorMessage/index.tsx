import tw from '@/common/utils/classUtil';
import { AnimatePresence } from 'framer-motion';
import FadeInSpan from '@/components/client/animations/FadeInSpan';

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {children && <FadeInSpan>
        <span
          className={tw([
            'block',
            'absolute',
            'top-0',
            'right-2',
            '-translate-y-full',
            'rounded-md',
            'text-base',
            'text-red-500'
          ])}
        >
          {children}
        </span>
      </FadeInSpan>}
    </AnimatePresence>
  );
};

export default ErrorMessage;
