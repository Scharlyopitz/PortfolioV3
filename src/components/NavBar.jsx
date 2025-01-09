import { Link, useLocation } from "react-router-dom";
import Logo from "/Logo.png";
import { AnimatePresence, motion as m } from "motion/react";

export default function NavBar({ setAbout, setHovered }) {
  const { pathname } = useLocation();

  const buttonAnimation = {
    initial: {
      y: "105%",
    },
    animate: {
      y: "0%",
      transition: { duration: 0.9, delay: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      y: "105%",
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  function handleClick() {
    setAbout(true);
    setHovered(false);
  }

  return (
    <nav>
      <Link to="/" className="logoContainer">
        <img src={Logo} alt="logo" />
      </Link>
      <AnimatePresence>
        {pathname !== "/apropos" && (
          <div className="hidden">
            <m.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={buttonAnimation}
            >
              <Link
                to="/apropos"
                onClick={() => handleClick()}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="AboutBtn hidden"
              >
                A propos
              </Link>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
