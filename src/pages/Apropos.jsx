import { Link } from "react-router-dom";
import AproposData from "../assets/AproposData.json";
import TitlePage from "../components/TitlePage";

export default function Apropos() {
  const githubLink = "https://github.com/Scharlyopitz";
  const instagramLink = "https://www.instagram.com/s.optz/?hl=fr";
  return (
    <main id="Apropos">
      <TitlePage title="A propos" />
      <div className="descriptionContainer">
        {AproposData[0].split(" ").map((word, i) => {
          return (
            <div key={i} className="hidden">
              <p>{word}</p>
            </div>
          );
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
