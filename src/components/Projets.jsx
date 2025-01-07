import { Link } from "react-router-dom";
import ProjetsData from "../assets/Projets.json";
import { useRef } from "react";
import { useScroll, useTransform, motion as m, useInView } from "motion/react";

export default function Projets() {
  return (
    <div className="ProjetsContainer">
      {ProjetsData.map((projet, i) => {
        return <Projet key={i} projet={projet} index={i} />;
      })}
    </div>
  );
}

function Projet({ projet, index }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  const titleRef = useRef(null);

  const isInView = useInView(titleRef, { margin: "-50px 0px -50px 0px" });

  const titleAnime = {
    show: {
      y: "0",
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    },
    hidden: {
      y: "105%",
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <Link to={projet.linkPath} className="Projet">
      <div ref={containerRef} className="image">
        <m.img style={{ y }} src={projet.image} alt={projet.name} />
      </div>
      <div className="titleContainer">
        <m.div ref={titleRef} className="title hidden">
          <m.h1
            initial="show"
            animate={isInView ? "show" : "hidden"}
            variants={titleAnime}
          >
            0{index + 1}
          </m.h1>
          <m.h1
            initial="show"
            animate={isInView ? "show" : "hidden"}
            variants={titleAnime}
          >
            {projet.name}
          </m.h1>
        </m.div>
      </div>
    </Link>
  );
}
