import { motion } from 'framer-motion';

/**
 * Wrap the page to create horizontal slide in page transition
 */
const HorizontalSlideInPage = (props: Props) => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={{
        hidden: {
          opacity: 0
        },
        show: {
          opacity: 1,
          translateX: [props.offset ?? 0, 0],
          transition: {
            type: 'spring',
            duration: props.duration ?? undefined,
            bounce: props.bounce ?? undefined,
            delay: props.delay ?? undefined
          }
        }
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default HorizontalSlideInPage;

type Props = {
  children: React.ReactNode;
  offset?: number;
  duration?: number;
  bounce?: number;
  delay?: number;
};
