import { Link, useNavigate } from "react-router-dom";
import AproposData from "../assets/AproposData.json";
import TitlePage from "../components/TitlePage";
import { motion as m } from "motion/react";
import { useEffect, useState } from "react";

export default function Apropos({ setHovered, loader }) {
  const socials = [
    { name: "Github", link: "https://github.com/Scharlyopitz" },
    {
      name: "Instagram",
      link: "https://www.instagram.com/s.optz/?hl=fr",
    },
  ];

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
        delay: loader ? 2.25 + 0.007 * i : 0.007 * i,
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
        delay: loader ? 2.25 + 0.3 : 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      y: "105%",
      opacity: 0,
      transition: { duration: 0.75, delay: 0.2, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const navigate = useNavigate();

  useEffect(() => {
    loader && navigate("/");
  }, [loader]);

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
    <m.main onClick={handleClick} onAnimationComplete={handleAnimationCompleted} initial="initial" animate="animate" exit="exit" id="Apropos">
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
          {socials.map(({ name, link }, i) => {
            return (
              <div key={i} className="hidden">
                <m.div variants={contactAnime}>
                  <Link onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} to={link} target="_blank">
                    {name}
                  </Link>
                </m.div>
              </div>
            );
          })}
        </div>
        <div className="hidden">
          <m.p variants={contactAnime}>scharly.opitz@gmail.com</m.p>
        </div>
      </div>
    </m.main>
  );
}
