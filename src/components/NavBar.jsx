import { Link } from "react-router-dom";
import Logo from "/Logo.png";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="logoContainer">
        <img src={Logo} alt="logo" />
      </Link>
      <Link to="/apropos" className="AboutBtn">
        About
      </Link>
    </nav>
  );
}
