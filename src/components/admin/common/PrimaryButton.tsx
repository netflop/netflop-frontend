import tw from '@/common/utils/classUtil';
import { Button, Typography, type ButtonProps } from 'antd';

const { Text } = Typography;

type Variant = 'cancel' | 'default' | 'primary' | 'delete';

export interface PrimaryButtonProps extends ButtonProps {
  variant?: Variant;
  typographyClassName?: string;
  textClassName?: string;
}

export default function PrimaryButton(
  props: PrimaryButtonProps,
  ref: React.Ref<HTMLButtonElement> | null
) {
  const {
    variant,
    className,
    typographyClassName,
    textClassName,
    children,
    ...restProps
  } = props;

  const classButton =
    'w-full flex  items-center justify-center hover:opacity-80';
  const classTypoButton = 'text-center text-base';

  switch (variant) {
    case 'default': {
      return (
        <Button ref={ref} className={tw(classButton, className)} {...restProps}>
          <Typography className={tw(classTypoButton, typographyClassName)}>
            {children}
          </Typography>
        </Button>
      );
    }
    case 'primary': {
      return (
        <Button
          ref={ref}
          type='primary'
          className={tw(classButton, className)}
          {...restProps}>
          <Typography className={tw(classTypoButton, typographyClassName)}>
            <Text className={tw('text-white', textClassName)}>{children}</Text>
          </Typography>
        </Button>
      );
    }
    case 'cancel': {
      return (
        <Button
          ref={ref}
          className={tw('bg-gray-light-11', classButton, className)}
          {...restProps}>
          <Typography className={tw(classTypoButton, typographyClassName)}>
            <Text className={tw(textClassName)}>{children}</Text>
          </Typography>
        </Button>
      );
    }
    case 'delete': {
      return (
        <Button
          ref={ref}
          type='primary'
          className={tw('hover:opacity-80', className)}
          {...restProps}>
          <Typography
            className={tw(
              'flex h-full items-center justify-center',
              typographyClassName
            )}>
            <Text className={tw('text-base text-white', textClassName)}>
              {children}
            </Text>
          </Typography>
        </Button>
      );
    }
    default:
      break;
  }

  return (
    <Button ref={ref} className={tw(className)} {...restProps}>
      {children}
    </Button>
  );
}
