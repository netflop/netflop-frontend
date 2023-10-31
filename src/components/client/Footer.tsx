import tw from '@/common/utils/classUtil';

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer
      className={tw([
        'relative',
        'w-full',
        'border-t',
        'border-neutral-200',
        'dark:border-neutral-800'
      ])}
    >
      {children}
    </footer>
  );
};

export default Footer;
