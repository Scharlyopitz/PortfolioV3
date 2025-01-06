import React from "react";
import Projets from "../assets/Projets.json";
import { useParams } from "react-router-dom";
import Background from "../components/Background";
import TitlePage from "../components/TitlePage";
import NavBar from "../components/NavBar";

export default function Projet() {
  const { projet } = useParams();

  const rightProject = Projets.find((p) => p.linkPath === projet);

  return (
    <main id="Projet">
      <NavBar />
      <TitlePage title={rightProject.name} />
      <Background />
      <h1>Bienvenue sur le projet {rightProject.name}</h1>
    </main>
  );
}
