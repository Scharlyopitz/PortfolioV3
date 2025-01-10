import { useEffect } from "react";
import Projets from "../components/Projets";
import TitlePage from "../components/TitlePage";

export default function Home({ setanimateTransiViaAbout }) {
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
