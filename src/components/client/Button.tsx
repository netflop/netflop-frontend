import tw from '@/common/utils/classUtil';

const createRipple = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const rippleClassname = 'ripple';
  const button = event.currentTarget;
  const ripple = button.querySelectorAll(`span.${rippleClassname}`);

  ripple.forEach((element) => {
    element.remove();
  });

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add(rippleClassname);

  button.appendChild(circle);
};

const Button = (props: Props) => {
  let sizeStyle;

  switch (props.size) {
    case 'sm':
      sizeStyle = 'text-sm min-w-[100px] h-8';
      break;
    case 'base':
      sizeStyle = 'text-base min-w-[120px] h-10';
      break;
    case 'lg':
      sizeStyle = 'text-lg min-w-[140px] h-12';
      break;
    case 'xl':
      sizeStyle = 'text-xl min-w-[160px] h-14';
      break;
    default:
      sizeStyle = 'text-base min-w-[100px] h-10';
      break;
  }

  return (
    <button
      type={props.type ? props.type : 'button'}
      disabled={props.disabled ?? false}
      onClick={(event) => {
        createRipple(event);

        if (props.onClick) {
          props.onClick();
        }
      }}
      className={tw([
        'relative',
        'overflow-hidden',
        'rounded-full',
        'text-white',
        'bg-teal-600',
        'dark:bg-teal-800',
        'flex',
        'justify-center',
        'items-center',
        'px-4',
        sizeStyle
      ])}
    >
      {props.children}
    </button >
  );
};

export default Button;

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
  size?: 'sm' | 'base' | 'lg' | 'xl' | undefined;
  onClick?: () => void;
};
