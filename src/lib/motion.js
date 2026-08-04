export const easeOut = [0.22, 1, 0.36, 1];

export const viewport = {
  // Re-run the reveal whenever the section enters the viewport again.
  once: false,
  amount: 0.18,
  margin: "0px 0px -8% 0px",
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});
