import { useEffect } from "react";
import Projets from "../components/Projets";
import TitlePage from "../components/TitlePage";

export default function Home({
  setanimateTransiViaAbout,
  clickedProject,
  animateTransiViaAbout,
  about,
  loader,
}) {
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight * clickedProject });
  }, [clickedProject]);

  useEffect(() => {
    setanimateTransiViaAbout(false);
  }, []);

  return (
    <main>
      <TitlePage title="Portfolio" />
      <Projets
        animateTransiViaAbout={animateTransiViaAbout}
        about={about}
        loader={loader}
      />
    </main>
  );
}
