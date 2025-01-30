import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projet from "./pages/Projet";
import Apropos from "./pages/Apropos";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import { AnimatePresence } from "motion/react";
import Cursor from "./utils/Cursor";
import Loader from "./components/Loader";
import Counter from "./components/Counter";
import Error from "./pages/Error";

export default function App() {
  const { pathname } = useLocation();

  const [about, setAbout] = useState(false);

  const [animateTransiViaAbout, setanimateTransiViaAbout] = useState(false);

  const [hovered, setHovered] = useState(false);

  const [clickedProject, setClickedProject] = useState();

  const [loader, setLoader] = useState(true);

  const [mobile, setMobile] = useState(false);

  function StopScroll() {
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-lenis-prevent", "true");
  }

  function RunScroll() {
    document.body.style.overflow = "auto";
    document.body.removeAttribute("data-lenis-prevent", "true");
  }

  function ScrollRestoration() {
    history.scrollRestoration = "manual";
  }

  useEffect(() => {
    loader ? StopScroll() : RunScroll();
  }, [loader]);

  useEffect(() => {
    setAbout(false);
    pathname === "/apropos" && setanimateTransiViaAbout(true);
  }, [pathname]);

  useEffect(() => {
    window.innerWidth < 1025 ? setMobile(true) : setMobile(false);

    // RESET DE L'HISTORIQUE DE L'URL ET SCROLLRESTORATION POUR SCROLL TO TOP

    !clickedProject && ScrollRestoration();

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <NavBar setAbout={setAbout} setHovered={setHovered} loader={loader} />

      <Cursor hovered={hovered} loader={loader} />
      <Background />
      <AnimatePresence mode="wait">
        <Routes location={pathname} key={pathname}>
          <Route
            path="/"
            element={
              <Home
                setanimateTransiViaAbout={setanimateTransiViaAbout}
                clickedProject={clickedProject}
                animateTransiViaAbout={animateTransiViaAbout}
                about={about}
                loader={loader}
                mobile={mobile}
              />
            }
          />
          <Route
            path="/:projet"
            element={
              <Projet
                about={about}
                animateTransiViaAbout={animateTransiViaAbout}
                setanimateTransiViaAbout={setanimateTransiViaAbout}
                setHovered={setHovered}
                setClickedProject={setClickedProject}
                loader={loader}
                mobile={mobile}
              />
            }
          />
          <Route
            path="/apropos"
            element={<Apropos setHovered={setHovered} loader={loader} />}
          />
        </Routes>
        <Route path="*" element={<Error />} />
      </AnimatePresence>
      <Counter loader={loader} />
      {loader && <Loader setLoader={setLoader} mobile={mobile} />}
    </>
  );
}
