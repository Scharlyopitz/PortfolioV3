import { Link } from "react-router-dom";
import AproposData from "../assets/AproposData.json";
import TitlePage from "../components/TitlePage";
import { motion as m } from "motion/react";

export default function Apropos() {
  const githubLink = "https://github.com/Scharlyopitz";
  const instagramLink = "https://www.instagram.com/s.optz/?hl=fr";

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
        delay: 0.003 * i,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  const contactAnime = {
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
        delay: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      y: "105%",
      opacity: 0,
      transition: { duration: 0.75, delay: 0.2, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <m.main
      onClick={() => history.back()}
      initial="initial"
      animate="animate"
      exit="exit"
      id="Apropos"
    >
      <TitlePage title="A propos" />
      <div className="descriptionContainer">
        {AproposData[0].split(" ").map((word, i) => {
          return (
            <div key={i} className="hidden">
              <m.p custom={i} variants={descriptionAnime}>
                {word}
              </m.p>
            </div>
          );
        })}
      </div>
      <div className="contactContainer">
        <div className="left">
          <div className="hidden">
            <m.div variants={contactAnime}>
              <Link to={githubLink} target="_blank">
                Github
              </Link>
            </m.div>
          </div>
          <div className="hidden">
            <m.div variants={contactAnime}>
              <Link to={instagramLink} target="_blank">
                Instagram
              </Link>
            </m.div>
          </div>
        </div>
        <div className="hidden">
          <m.p variants={contactAnime}>scharly.opitz@gmail.com</m.p>
        </div>
      </div>
    </m.main>
  );
}
