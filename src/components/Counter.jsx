import { animate } from "motion";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion as m } from "motion/react";

export default function Counter({ loader }) {
  const ref = useRef(null);

  const numberAnime = {
    initial: {
      y: 0,
      x: "-50%",
    },
    animate: {
      y: "calc(-50vh + 20px + 1vw)",

      transition: { duration: 2.25, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const exitNumber = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-105%",
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  useEffect(() => {
    animate(0, 100, {
      duration: 2.25,
      delay: 0.15,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (latest) => (ref.current.innerHTML = Math.round(latest) + "%"),
    });
  }, []);

  return (
    <m.div
      initial="initial"
      animate="animate"
      variants={numberAnime}
      className="Counter hidden"
    >
      <AnimatePresence>
        {loader && (
          <m.div exit="exit" ref={ref} variants={exitNumber} className="number">
            0
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}
