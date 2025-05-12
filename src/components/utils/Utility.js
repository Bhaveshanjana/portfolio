
export const Slidup = (delay) => {
  return {
    initial: {
      y: 70,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay,
      },
    },
  };
};
