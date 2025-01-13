import { useEffect } from "react";
import Projets from "../components/Projets";
import TitlePage from "../components/TitlePage";

export default function Home({ setanimateTransiViaAbout, clickedProject }) {
  useEffect(() => {
    window.scrollTo({ top: (window.innerHeight + 0.3) * clickedProject });
  }, [clickedProject]);

  useEffect(() => {
    setanimateTransiViaAbout(false);
  }, []);

  return (
    <main>
      <TitlePage title="Portfolio" />
      <Projets />
    </main>
  );
}
