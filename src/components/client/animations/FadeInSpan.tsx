import { motion } from 'framer-motion';

/**
 * Wrap the element to create fade in enter transition
 */
const FadeInSpan = (props: Props) => {
  return (
    <motion.span
      initial='hidden'
      animate='show'
      exit='hide'
      variants={{
        hidden: {
          opacity: 0
        },
        hide: {
          opacity: 0,
          transition: {
            duration: props.duration ?? undefined,
            delay: props.delay ?? undefined
          }
        },
        show: {
          opacity: 1,
          transition: {
            duration: props.duration ?? undefined,
            delay: props.delay ?? undefined
          }
        }
      }}
    >
      {props.children}
    </motion.span>
  );
};

export default FadeInSpan;

type Props = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
};
