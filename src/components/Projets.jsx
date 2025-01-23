import { Link } from "react-router-dom";
import ProjetsData from "../assets/Projets.json";
import { useRef } from "react";
import { useScroll, useTransform, motion as m, useInView } from "motion/react";

export default function Projets({
  animateTransiViaAbout,
  about,
  loader,
  mobile,
}) {
  const pageTransi = {
    initial: {
      opacity: animateTransiViaAbout ? 0 : 1,
      willChange: "opacity",
    },
    animate: {
      opacity: 1,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      opacity: about ? 0 : 1,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <m.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransi}
      className="ProjetsContainer"
    >
      {ProjetsData.map((projet, i) => {
        return (
          <Projet
            key={i}
            projet={projet}
            index={i}
            loader={loader}
            mobile={mobile}
          />
        );
      })}
    </m.div>
  );
}

function Projet({ projet, index, loader, mobile }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  const titleRef = useRef(null);

  const isInView = useInView(titleRef);

  const titleForLoader = {
    initial: {
      opacity: loader ? 0 : 1,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, delay: 2.25, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const titleAnime = {
    show: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    hidden: {
      y: "105%",
      opacity: 0,
      transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const mobileTransi = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
  };

  const containerImageLoader = {
    initial: {
      clipPath: loader
        ? "polygon(12% 12%, 88% 12%, 88% 88%, 12% 88%)"
        : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      willChange: "clip-path",
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

      transition: {
        duration: 1,
        delay: loader ? 2.25 : 0,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const mobileImageTransi = {
    initial: {
      scale: "1",
    },
    animate: {
      scale: "1",
    },
  };

  const imageLoader = {
    initial: {
      scale: loader ? 0.77 : 1,
      willChange: "transform",
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.8,
        delay: loader ? 2.25 : 0,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <Link to={projet.linkPath} ref={containerRef} className="Projet">
      <m.div
        variants={mobile ? mobileTransi : containerImageLoader}
        className="image"
      >
        <m.picture
          style={{ translateY: mobile ? 0 : y }}
          variants={mobile ? mobileImageTransi : imageLoader}
        >
          <source srcSet={projet.images.w440} media="(max-width: 440px)" />
          <img src={projet.images.w1440} alt={projet.name} />
        </m.picture>
      </m.div>
      <m.div variants={titleForLoader} className="titleContainer">
        <m.div ref={titleRef} className="title hidden">
          <m.h1
            initial="show"
            animate={isInView ? "show" : "hidden"}
            variants={!mobile && titleAnime}
          >
            0{index + 1}
          </m.h1>
          <m.h1
            initial="show"
            animate={isInView ? "show" : "hidden"}
            variants={!mobile && titleAnime}
          >
            {projet.name}
          </m.h1>
        </m.div>
      </m.div>
    </Link>
  );
}
