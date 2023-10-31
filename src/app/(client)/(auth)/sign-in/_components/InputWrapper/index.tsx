import tw from '@/common/utils/classUtil';

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={tw([
        'relative',
        'my-8',
        'w-[280px]',
        'md:w-[360px]',
        'border',
        'rounded-md',
        'border-neutral-300',
        'dark:border-neutral-700',
        'bg-transparent',
        'text-lg',
        'text-black',
        'dark:text-white'
      ])}
    >
      {children}
    </div>
  );
};

export default InputWrapper;
