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

export default function App() {
  const { pathname } = useLocation();

  const [about, setAbout] = useState(false);

  const [animateTransiViaAbout, setanimateTransiViaAbout] = useState(false);

  const [hovered, setHovered] = useState(false);

  const [clickedProject, setClickedProject] = useState();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setAbout(false);
    pathname === "/apropos" && setanimateTransiViaAbout(true);
  }, [pathname]);

  useEffect(() => {
    // RESET DE L'HISTORIQUE DE L'URL ET SCROLLRESTORATION POUR SCROLL TO TOP

    if (!clickedProject) {
      history.scrollRestoration = "manual";
    }

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
              />
            }
          />
          <Route
            path="/apropos"
            element={<Apropos setHovered={setHovered} loader={loader} />}
          />
        </Routes>
      </AnimatePresence>
      {loader && <Loader setLoader={setLoader} />}
    </>
  );
}
