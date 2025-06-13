import { useEffect } from "react";
import Projets from "../components/Projets";
import TitlePage from "../components/TitlePage";

export default function Home({ lenisRef, setanimateTransiViaAbout, clickedProject, animateTransiViaAbout, about, loader, mobile }) {
  useEffect(() => {
    const lenis = lenisRef.current;

    if (!lenis) return;

    lenis.stop();
    window.scrollTo({ top: window.innerHeight * clickedProject });
    setTimeout(() => {
      lenis.start();
    }, 200);
  }, [clickedProject, lenisRef]);

  useEffect(() => {
    setanimateTransiViaAbout(false);
  }, []);

  return (
    <main>
      <TitlePage title="Portfolio" />
      <Projets animateTransiViaAbout={animateTransiViaAbout} about={about} loader={loader} mobile={mobile} />
    </main>
  );
}
