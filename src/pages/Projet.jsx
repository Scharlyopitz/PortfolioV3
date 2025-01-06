import React from "react";
import Projets from "../assets/Projets.json";
import { useParams } from "react-router-dom";
import Background from "../components/Background";
import TitlePage from "../components/TitlePage";
import NavBar from "../components/NavBar";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projet() {
  const { projet } = useParams();

  const rightProject = Projets.find((p) => p.linkPath === projet);

  return (
    <main id="Projet">
      <NavBar />
      <TitlePage title={rightProject.name} />
      <Background />
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
          <div className="siteBtn">
            <span>voir site</span>
            <FontAwesomeIcon icon={faRightLong} />
          </div>
          <h1>{rightProject.name}</h1>
        </div>
      </div>
    </main>
  );
}
