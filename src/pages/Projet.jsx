import React from "react";
import Projets from "../assets/Projets.json";
import { Link, useParams } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projet() {
  const { projet } = useParams();

  const rightProject = Projets.find((p) => p.linkPath === projet);

  return (
    <main id="Projet">
      <TitlePage title={rightProject.name} />
      <div className={`Projet ${rightProject.rightTemplate && "right"}`}>
        <div className="image">
          <img src={rightProject.image} alt={rightProject.name} />
        </div>
        <div className={`description ${rightProject.rightTemplate && "right"}`}>
          {rightProject.description.split(" ").map((word, i) => {
            return <p key={i}>{word}</p>;
          })}
        </div>
        <div className="titleContainer">
          <Link to={rightProject.lien} target="_blank" className="siteBtn">
            <span>voir site</span>
            <FontAwesomeIcon icon={faRightLong} />
          </Link>
          <h1>{rightProject.name}</h1>
        </div>
      </div>
    </main>
  );
}
