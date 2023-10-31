'use client';

import tw from '@/common/utils/classUtil';
import HorizontalSlideInPage from '@/components/client/animations/HorizontalSlideInPage';

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={
      tw([
        'my-auto',
        'overflow-hidden'
      ])}>
      <HorizontalSlideInPage offset={40} duration={0.5}>
        {children}
      </HorizontalSlideInPage>
    </div >
  );
};

export default SignUpLayout;

