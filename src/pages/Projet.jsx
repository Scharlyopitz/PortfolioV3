import React, { useEffect, useState } from "react";
import Projets from "../assets/Projets.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion as m } from "motion/react";
import Redirect from "./Redirect";

export default function Projet({ about, animateTransiViaAbout, setanimateTransiViaAbout, setHovered, setClickedProject, loader, mobile }) {
  const { projet } = useParams();

  const navigate = useNavigate();

  const rightProject = Projets.find((p) => p.linkPath === projet);

  if (!rightProject) {
    return <Redirect />;
  }

  useEffect(() => {
    setClickedProject(rightProject.id - 1);
  }, []);

  animateTransiViaAbout &&
    setTimeout(() => {
      setanimateTransiViaAbout(false);
    }, 100);

  const titleAnime = {
    initial: {
      y: 0,
      opacity: animateTransiViaAbout || loader ? 0 : 1,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: loader ? 2.25 : 0,
        ease: animateTransiViaAbout ? [0.33, 1, 0.68, 1] : [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      y: 0,
      opacity: about ? 0 : 1,
      transition: { duration: about ? 0.5 : 0.75, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const numberAnime = {
    initial: {
      y: animateTransiViaAbout ? "105%" : 0,
      willChange: "transform",
    },
    animate: {
      y: "105%",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      y: about ? "105%" : 0,
      opacity: 1,
      transition: { duration: about ? 0.5 : 0.8, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const delayAnime = animateTransiViaAbout ? 0 : 0.3;

  const buttonSiteAnime = {
    initial: {
      y: animateTransiViaAbout ? 0 : "105%",
      opacity: 0,
      willChange: "transform",
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: loader ? 2.25 : delayAnime,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      y: about ? 0 : "105%",
      opacity: 0,
      transition: { duration: about ? 0.5 : 0.75, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const imageContainerMobile = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: animateTransiViaAbout ? 0 : 1,
      willChange: "clip-path",
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: animateTransiViaAbout ? [0.33, 1, 0.68, 1] : [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: about ? 0.5 : 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const imageContainerAnime = {
    initial: {
      clipPath: animateTransiViaAbout ? "polygon(12% 12%, 88% 12%, 88% 88%, 12% 88%)" : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      opacity: animateTransiViaAbout ? 0 : 1,
      willChange: "clip-path",
    },
    animate: {
      clipPath: "polygon(12% 12%, 88% 12%, 88% 88%, 12% 88%)",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: animateTransiViaAbout ? [0.33, 1, 0.68, 1] : [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      clipPath: about ? "polygon(12% 12%, 88% 12%, 88% 88%, 12% 88%)" : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition: { duration: about ? 0.5 : 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const imageAnimeMobile = {
    initial: {
      scale: "1",
    },
    animate: {
      scale: "1",
    },
    exit: {
      scale: "1",
      opacity: about ? 0 : 1,
      transition: { duration: about ? 0.5 : 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const imageAnime = {
    initial: {
      scale: animateTransiViaAbout ? 0.77 : 1,
      willChange: "transform",
    },
    animate: {
      scale: 0.77,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      scale: about ? 0.77 : 1,
      opacity: about ? 0 : 1,
      transition: { duration: about ? 0.5 : 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const descriptionAnime = {
    initial: {
      y: animateTransiViaAbout ? "0" : "105%",
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
      y: about ? "0" : "105%",
      opacity: 0,
      transition: {
        duration: about ? 0.5 : 0.75,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const staggerDescription = {
    animate: {
      transition: {
        delayChildren: loader ? 2.25 : 0,
        staggerChildren: animateTransiViaAbout ? 0 : 0.007,
      },
    },
    exit: {
      transition: {
        staggerChildren: about ? 0 : 0.003,
        staggerDirection: 1,
      },
    },
  };

  const indexAnime = {
    initial: {
      y: animateTransiViaAbout ? "0" : "105%",
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
      y: about ? "0" : "105%",
      opacity: 0,
      transition: {
        duration: about ? 0.5 : 0.75,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const staggerIndex = {
    animate: {
      transition: {
        delayChildren: loader ? 2.25 : 0,
        staggerChildren: animateTransiViaAbout ? 0 : 0.07,
      },
    },
    exit: {
      transition: {
        staggerChildren: about ? 0 : 0.07,
        staggerDirection: 1,
      },
    },
  };

  // Lock pour eviter les clicks multiples
  const [locked, setLocked] = useState(false);

  const handleClick = () => {
    if (locked) return;
    setLocked(true);
    navigate(-1);
  };

  const handleAnimationCompleted = (definition) => {
    if (definition === "exit") {
      setLocked(false);
    }
  };

  return (
    <m.main onAnimationComplete={handleAnimationCompleted} initial="initial" animate="animate" exit="exit" id="Projet">
      <TitlePage title={rightProject.name} />
      <div onClick={handleClick} className={`Projet ${rightProject.rightTemplate && "right"}`}>
        <m.div variants={mobile ? imageContainerMobile : imageContainerAnime} className="image">
          <m.picture variants={mobile ? imageAnimeMobile : imageAnime}>
            <source srcSet={rightProject.images.w440} media="(max-width: 440px)" />
            <img src={rightProject.images.w1440} alt={rightProject.name} />
          </m.picture>
        </m.div>
        <m.div variants={staggerIndex} className="index hidden">
          <m.span variants={indexAnime}>index</m.span>
          <m.span variants={indexAnime}>/ 0{rightProject.id}</m.span>
        </m.div>
        <m.div variants={staggerDescription} className={`description ${rightProject.rightTemplate && "right"}`}>
          {rightProject.description.split(" ").map((word, i) => {
            return (
              <div key={i} className="hidden">
                <m.p variants={descriptionAnime}>{word}</m.p>
              </div>
            );
          })}
        </m.div>
        <div className="titleContainer">
          <div className="title">
            <Link onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} to={rightProject.lien} target="_blank" className="siteBtn hidden">
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
            <div className="hidden">
              <m.h1 variants={titleAnime}>{rightProject.name}</m.h1>
            </div>
          </div>
        </div>
      </div>
    </m.main>
  );
}
