const smoothEase = [0.22, 1, 0.36, 1] as const;
const easeOut = "easeOut" as const;

export const viewport = {
  once: true,
  amount: 0.2,
};

export const transitions = {
  smooth: {
    duration: 0.55,
    ease: smoothEase,
  },
  micro: {
    duration: 0.2,
    ease: easeOut,
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.smooth,
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const cardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const hoverLift = {
  y: -4,
  scale: 1.02,
  transition: transitions.micro,
};

export const tapScale = {
  scale: 0.98,
  transition: {
    duration: 0.12,
  },
};
