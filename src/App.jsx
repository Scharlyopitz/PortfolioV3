import { useEffect, useRef, useState } from "react";
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
import Redirect from "./pages/Redirect";

export default function App() {
  const { pathname } = useLocation();

  const [about, setAbout] = useState(false);

  const [animateTransiViaAbout, setanimateTransiViaAbout] = useState(false);

  const [hovered, setHovered] = useState(false);

  const [clickedProject, setClickedProject] = useState();

  const [loader, setLoader] = useState(true);

  const [mobile, setMobile] = useState(false);

  const lenisRef = useRef(null);

  useEffect(() => {
    setAbout(false);
    pathname === "/apropos" && setanimateTransiViaAbout(true);
  }, [pathname]);

  useEffect(() => {
    window.innerWidth < 1025 ? setMobile(true) : setMobile(false);

    const lenis = new Lenis({
      lerp: 0.045,
      smooth: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      const lenis = lenisRef.current;

      loader ? lenis.stop() : lenis.start();
    }
  }, [loader]);

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
              <Home setanimateTransiViaAbout={setanimateTransiViaAbout} clickedProject={clickedProject} animateTransiViaAbout={animateTransiViaAbout} about={about} loader={loader} mobile={mobile} />
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
          <Route path="/apropos" element={<Apropos setHovered={setHovered} loader={loader} />} />

          <Route path="*" element={<Redirect />} />
        </Routes>
      </AnimatePresence>
      <Counter loader={loader} />
      {loader && <Loader setLoader={setLoader} mobile={mobile} />}
    </>
  );
}
