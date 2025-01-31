import { useEffect } from "react";
import Projets from "../components/Projets";
import TitlePage from "../components/TitlePage";

export default function Home({
  setanimateTransiViaAbout,
  clickedProject,
  animateTransiViaAbout,
  about,
  loader,
  mobile,
}) {
  useEffect(() => {
    window.scrollTo({ top: (window.innerHeight + 0.5) * clickedProject });
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
        mobile={mobile}
      />
    </main>
  );
}
