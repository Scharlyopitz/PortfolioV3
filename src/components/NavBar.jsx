import { Link, useLocation } from "react-router-dom";
import Logo from "/Logo.png";

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav>
      <Link to="/" className="logoContainer">
        <img src={Logo} alt="logo" />
      </Link>
      {pathname !== "/apropos" && (
        <Link to="/apropos" className="AboutBtn">
          A propos
        </Link>
      )}
    </nav>
  );
}
