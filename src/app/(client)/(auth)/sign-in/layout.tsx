'use client';

import tw from '@/common/utils/classUtil';
import HorizontalSlideInPage from '@/components/client/animations/HorizontalSlideInPage';

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={tw([
        'flex',
        'justify-center',
        'items-center'
      ])}
    >
      <HorizontalSlideInPage offset={-40} duration={0.5}>
        {children}
      </HorizontalSlideInPage>
    </div>
  );
};

export default SignInLayout;
