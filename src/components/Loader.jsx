import Wilhelm from "/WilhelmPortrait.webp";
import Booki from "/Booki.webp";
import Kasa from "/Kasa.webp";
import Ohmyfood from "/Ohmyfood.webp";
import SophieBluel from "/SophieBluel.webp";
import Projet9 from "/Projet9.webp";
import { useLocation } from "react-router-dom";
import Projets from "../assets/Projets.json";

import { motion as m } from "motion/react";
import Background from "./Background";

export default function Loader({ setLoader, mobile }) {
  const { pathname } = useLocation();

  const findProjet = Projets.find((p) => `/${p.linkPath}` === pathname);

  const template = findProjet?.rightTemplate;

  const rightImage = {
    "/": Wilhelm,
    "/wilhelm-opitz": Wilhelm,
    "/booki": Booki,
    "/ohmyfood": Ohmyfood,
    "/sophie-bluel": SophieBluel,
    "/kasa": Kasa,
    "/nina-carducci": Projet9,
  };

  const images = [
    { src: Wilhelm },
    { src: Booki },
    { src: Ohmyfood },
    { src: Booki },
    { src: Ohmyfood },
    { src: rightImage[pathname] },
  ];

  const calculTranslateInitial = 100 / images.length + 1;

  const calculTranslateAnimate = (100 / images.length) * (images.length - 1);

  const animeLoader = {
    initial: {
      y: `${calculTranslateInitial}%`,
      filter: "brightness(1)",
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
      <m.div
        variants={animeLoader}
        onAnimationComplete={() => setLoader(false)}
        className="content"
      >
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
