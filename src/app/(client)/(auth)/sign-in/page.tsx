'use client';

import Link from '@/components/client/Link';
import Form, { onSubmitData } from './_components/Form';
import tw from '@/common/utils/classUtil';

const SignIn = () => {
  const onSubmit = (data: onSubmitData) => { };

  return (
    <div
      className={tw([
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'mt-20',
        'w-fit',
        'md:p-24',
        'md:border',
        'border-neutral-300',
        'dark:border-neutral-700',
        'rounded-md'
      ])}
    >
      <Form onSubmit={onSubmit} isLoading={false} />
      <div className={tw(['m-4'])}>
        <Link
          href='/sign-up'
          size='md'
        >
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
