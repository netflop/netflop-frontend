import tw from '@/common/utils/classUtil';

const Label = (props: Props) => {
  return (
    <label htmlFor={props.htmlFor}>
      <span
        className={tw([
          'absolute',
          'top-1/2',
          'left-4',
          '-translate-y-1/2',
          'text-neutral-600',
          'leading-none',
          'cursor-text',
          'select-none',
          'transition-all',
          props.isFocused && '-top-1 left-2 -translate-y-full scale-90 text-teal-600 cursor-default'
        ])}
      >
        {props.children}
      </span>
    </label>
  );
};

export default Label;

type Props = {
  children: React.ReactNode;
  htmlFor: string;
  isFocused: boolean;
}
