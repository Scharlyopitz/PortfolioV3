import { AnimatePresence, motion as m } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Cursor() {
  const { pathname } = useLocation();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const textChange = {
    open: {
      y: "105%",
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
    close: {
      y: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <m.div
      animate={{ y: mousePosition.y, x: mousePosition.x }}
      transition={{ type: "keyframes", ease: "backOut" }}
      className="Cursor"
    >
      <m.div
        initial="open"
        animate={pathname === "/" ? "open" : "close"}
        className="hidden"
      >
        <m.p variants={textChange}>close</m.p>
      </m.div>
    </m.div>
  );
}
