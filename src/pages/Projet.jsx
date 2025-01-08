import React from "react";
import Projets from "../assets/Projets.json";
import { Link, useParams } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion as m } from "motion/react";

export default function Projet() {
  const { projet } = useParams();

  const rightProject = Projets.find((p) => p.linkPath === projet);

  const numberAnime = {
    initial: {
      y: 0,
      willChange: "transform",
    },
    animate: {
      y: "105%",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
    exit: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const buttonSiteAnime = {
    initial: {
      y: "105%",
      willChange: "transform",
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    },
    exit: {
      y: "105%",
      opacity: 0,
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <m.main initial="initial" animate="animate" exit="exit" id="Projet">
      <TitlePage title={rightProject.name} />
      <div className={`Projet ${rightProject.rightTemplate && "right"}`}>
        <div className="image">
          <img src={rightProject.image} alt={rightProject.name} />
        </div>
        <div className="index">
          <span>index </span>
          <span>/ 0{rightProject.id}</span>
        </div>
        <div className={`description ${rightProject.rightTemplate && "right"}`}>
          {rightProject.description.split(" ").map((word, i) => {
            return (
              <div key={i} className="hidden">
                <p>{word}</p>
              </div>
            );
          })}
        </div>
        <div className="titleContainer">
          <div className="title">
            <Link
              to={rightProject.lien}
              target="_blank"
              className="siteBtn hidden"
            >
              <div className="hidden">
                <m.span variants={buttonSiteAnime}>voir site</m.span>
              </div>

              <m.div variants={buttonSiteAnime}>
                <FontAwesomeIcon icon={faRightLong} />
              </m.div>
            </Link>
            <div className="numberContainer hidden">
              <m.h1 variants={numberAnime} className="number">
                0{rightProject.id}
              </m.h1>
            </div>
            <h1>{rightProject.name}</h1>
          </div>
        </div>
      </div>
    </m.main>
  );
}
