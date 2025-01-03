import { useEffect } from "react";
import Background from "./components/Background";
import Projets from "./components/Projets";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    // RESET DE L'HISTORIQUE DE L'URL ET SCROLLRESTORATION POUR SCROLL TO TOP
    history.scrollRestoration = "manual";

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <span className="AboutBtn">About</span>
      <Background />
      <Projets />
    </main>
  );
}
