import { Link } from "react-router-dom";
import AproposData from "../assets/AproposData.json";

export default function Apropos() {
  const githubLink = "https://github.com/Scharlyopitz";
  const instagramLink = "https://www.instagram.com/s.optz/?hl=fr";
  return (
    <main id="Apropos">
      <div className="descriptionContainer">
        {AproposData[0].split(" ").map((word, i) => {
          return <p key={i}>{word}</p>;
        })}
      </div>
      <div className="contactContainer">
        <div className="left">
          <Link to={githubLink} target="_blank">
            Github
          </Link>
          <Link to={instagramLink} target="_blank">
            Instagram
          </Link>
        </div>
        <p>scharly.opitz@gmail.com</p>
      </div>
    </main>
  );
}
