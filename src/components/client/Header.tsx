import tw from '@/common/utils/classUtil';

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header
      className={tw([
        'relative',
        'w-full',
        'border-b',
        'border-neutral-200',
        'dark:border-neutral-700'
      ])}
    >
      {children}
    </header>
  );
};

export default Header;
