import { useEffect } from "react";
import Lenis from "lenis";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projet from "./pages/Projet";
import Apropos from "./pages/Apropos";
import Background from "./components/Background";
import NavBar from "./components/NavBar";

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
    <>
      <NavBar />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:projet" element={<Projet />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </>
  );
}
