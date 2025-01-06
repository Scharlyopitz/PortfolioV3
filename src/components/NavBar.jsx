import { Link } from "react-router-dom";
import Logo from "/Logo.png";

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="logoContainer">
        <img src={Logo} alt="logo" />
      </Link>
      <span className="AboutBtn">About</span>
    </nav>
  );
}
