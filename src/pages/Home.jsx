import { useEffect } from "react";
import Projets from "../components/Projets";
import TitlePage from "../components/TitlePage";

export default function Home({ setanimateTransiViaAbout, projectNumber }) {
  useEffect(() => {
    window.scrollTo({ top: (window.innerHeight + 0.3) * projectNumber });
    setanimateTransiViaAbout(false);
  }, []);

  return (
    <main>
      <TitlePage title="Portfolio" />
      <Projets />
    </main>
  );
}
