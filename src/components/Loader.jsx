import Wilhelm440 from "/WilhelmPortrait-440.webp";
import Wilhelm from "/WilhelmPortrait-1440.webp";
import Kanti from "/Kanti-1440.webp";
import Kanti440 from "/Kanti-440.webp";
import Booki440 from "/Booki-440.webp";
import Booki from "/Booki-1440.webp";
import Kasa440 from "/Kasa-440.webp";
import Kasa from "/Kasa-1440.webp";
import Ohmyfood440 from "/Ohmyfood-440.webp";
import Ohmyfood from "/Ohmyfood-1440.webp";
import SophieBluel440 from "/SophieBluel-440.webp";
import SophieBluel from "/SophieBluel-1440.webp";
import Projet9440 from "/Projet9-440.webp";
import Projet9 from "/Projet9-1440.webp";
import { useLocation } from "react-router-dom";
import Projets from "../assets/Projets.json";

import { motion as m } from "motion/react";
import Background from "./Background";

export default function Loader({ setLoader, mobile }) {
  const { pathname } = useLocation();

  const findProjet = Projets.find((p) => `/${p.linkPath}` === pathname);

  const template = findProjet?.rightTemplate;

  const width440 = window.innerWidth < 440;

  const rightImage = {
    "/": width440 ? Kanti440 : Kanti,
    "/kanti-studio": width440 ? Kanti440 : Kanti,
    "/wilhelm-opitz": width440 ? Wilhelm440 : Wilhelm,
    "/booki": width440 ? Booki440 : Booki,
    "/ohmyfood": width440 ? Ohmyfood440 : Ohmyfood,
    "/sophie-bluel": width440 ? SophieBluel440 : SophieBluel,
    "/kasa": width440 ? Kasa440 : Kasa,
    "/nina-carducci": width440 ? Projet9440 : Projet9,
  };

  const images = [
    { src: width440 ? Wilhelm440 : Wilhelm },
    { src: width440 ? Booki440 : Booki },
    { src: width440 ? Ohmyfood440 : Ohmyfood },
    { src: width440 ? Booki440 : Booki },
    { src: width440 ? Ohmyfood440 : Ohmyfood },
    { src: rightImage[pathname] },
  ];

  const calculTranslateInitial = 100 / images.length + 1;

  const calculTranslateAnimate = (100 / images.length) * (images.length - 1);

  const animeLoader = {
    initial: {
      y: `${calculTranslateInitial}%`,
      filter: "brightness(1)",
      willChange: "transform",
    },
    animate: {
      y: `-${calculTranslateAnimate}%`,
      filter: mobile ? "brightness(0.6)" : "brightness(1)",
      transition: {
        duration: 2.25,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  return (
    <m.div initial="initial" animate="animate" className="Loader">
      <Background />
      <m.div variants={animeLoader} onAnimationComplete={() => setLoader(false)} className="content">
        {images.map(({ src }, i) => {
          return (
            <div key={i} className={`hidden ${template && "rightTemplate"}`}>
              <div className="image">
                <img src={src} alt={`imageLoader${i + 1}`} />
              </div>
            </div>
          );
        })}
      </m.div>
    </m.div>
  );
}
