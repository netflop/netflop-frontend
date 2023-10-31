import NextLink from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import tw from '@/common/utils/classUtil';

const Link = (props: LinkProps) => {
  let fontSize;

  switch (props.size) {
    case 'sm':
      fontSize = 'text-sm';
      break;
    case 'base':
      fontSize = 'text-base';
      break;
    case 'md':
      fontSize = 'text-md';
      break;
    case 'lg':
      fontSize = 'text-lg';
      break;
    case 'xl':
      fontSize = 'text-xl';
      break;
    default:
      fontSize = 'text-base';
      break;
  }

  return (
    <NextLink
      href={props.href}
      as={props.as}
      replace={props.replace}
      scroll={props.scroll}
      shallow={props.shallow}
    >
      <span
        className={tw([
          fontSize,
          'text-teal-600',
          'hover:text-teal-500',
          'transition-all',
          'duration-150',
          'underline',
          'underline-offset-4'
        ])}
      >
        {props.children}
      </span>
    </NextLink>
  );
};

export default Link;

type LinkProps = {
  children: React.ReactNode;
  href: Url,
  as?: Url | undefined,
  replace?: boolean | undefined;
  scroll?: boolean | undefined;
  shallow?: boolean | undefined;
  size?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | undefined;
};
