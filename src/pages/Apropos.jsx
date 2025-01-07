import { Link } from "react-router-dom";
import AproposData from "../assets/AproposData.json";
import TitlePage from "../components/TitlePage";
import { motion as m } from "motion/react";

export default function Apropos() {
  const githubLink = "https://github.com/Scharlyopitz";
  const instagramLink = "https://www.instagram.com/s.optz/?hl=fr";

  const easeOutCubic = [0.33, 1, 0.68, 1];

  const descriptionAnime = {
    initial: {
      y: "105%",
    },
    animate: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        delay: 0.007 * i,
        ease: easeOutCubic,
      },
    }),
    exit: {
      y: "105%",
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    },
  };
  return (
    <main id="Apropos">
      <TitlePage title="A propos" />
      <div className="descriptionContainer">
        {AproposData[0].split(" ").map((word, i) => {
          return (
            <div key={i} className="hidden">
              <m.p
                initial="initial"
                animate="animate"
                exit="exit"
                custom={i}
                variants={descriptionAnime}
              >
                {word}
              </m.p>
            </div>
          );
        })}
      </div>
      <div className="contactContainer">
        <div className="left">
          <div className="hidden">
            <div>
              <Link to={githubLink} target="_blank">
                Github
              </Link>
            </div>
          </div>
          <div className="hidden">
            <div>
              <Link to={instagramLink} target="_blank">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <p>scharly.opitz@gmail.com</p>
      </div>
    </main>
  );
}
