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
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
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
      transition: { duration: 0.75, delay: 0.3, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      y: "105%",
      opacity: 0,
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const imageContainerAnime = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      willChange: "clip-path",
    },
    animate: {
      clipPath: "polygon(12% 12%, 88% 12%, 88% 88%, 12% 88%)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const imageAnime = {
    initial: {
      scale: 1,
      willChange: "transform",
    },
    animate: {
      scale: 0.77,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      scale: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const descriptionAnime = {
    initial: {
      y: "105%",
      opacity: 0,
      willChange: "transform",
    },
    animate: (i) => ({
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.007 * i,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
    exit: (i) => ({
      y: "105%",
      opacity: 0,
      transition: {
        duration: 0.75,
        delay: 0.007 * -i,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  const indexAnime = {
    initial: {
      y: "105%",
      opacity: 0,
      willChange: "transform",
    },
    animate: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      y: "105%",
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const staggerIndex = {
    animate: {
      transition: { staggerChildren: 0.07 },
    },
    exit: {
      transition: { staggerChildren: 0.07, staggerDirection: 1 },
    },
  };

  return (
    <m.main initial="initial" animate="animate" exit="exit" id="Projet">
      <TitlePage title={rightProject.name} />
      <div className={`Projet ${rightProject.rightTemplate && "right"}`}>
        <m.div variants={imageContainerAnime} className="image">
          <m.img
            variants={imageAnime}
            src={rightProject.image}
            alt={rightProject.name}
          />
        </m.div>
        <m.div variants={staggerIndex} className="index hidden">
          <m.span variants={indexAnime}>index</m.span>
          <m.span variants={indexAnime}>/ 0{rightProject.id}</m.span>
        </m.div>
        <div className={`description ${rightProject.rightTemplate && "right"}`}>
          {rightProject.description.split(" ").map((word, i) => {
            return (
              <div key={i} className="hidden">
                <m.p custom={i} variants={descriptionAnime}>
                  {word}
                </m.p>
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
