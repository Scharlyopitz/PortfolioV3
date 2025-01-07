import { Link, useLocation } from "react-router-dom";
import Logo from "/Logo.png";
import { AnimatePresence } from "motion/react";

export default function NavBar() {
  const { pathname } = useLocation();

  // const buttonAnimation = {
  //   initial:{

  //   },
  //   animate:{

  //   },
  //   exit:{

  //   },
  // }

  return (
    <nav>
      <Link to="/" className="logoContainer">
        <img src={Logo} alt="logo" />
      </Link>
      <AnimatePresence>
        {pathname !== "/apropos" && (
          <Link to="/apropos" className="AboutBtn">
            <span>A propos</span>
          </Link>
        )}
      </AnimatePresence>
    </nav>
  );
}
