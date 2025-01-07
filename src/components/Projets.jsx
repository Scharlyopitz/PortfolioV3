import { Link } from "react-router-dom";
import ProjetsData from "../assets/Projets.json";
import { useRef } from "react";
import { useScroll, useTransform, motion as m } from "motion/react";

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

  return (
    <Link to={projet.linkPath} className="Projet">
      <div ref={containerRef} className="image">
        <m.img style={{ y }} src={projet.image} alt={projet.name} />
      </div>
      <div className="titleContainer">
        <h1>0{index + 1}</h1>
        <h1>{projet.name}</h1>
      </div>
    </Link>
  );
}
