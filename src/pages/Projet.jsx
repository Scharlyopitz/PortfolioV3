import React from "react";
import Projets from "../assets/Projets.json";
import { useParams } from "react-router-dom";
import Background from "../components/Background";

export default function Projet() {
  const { projet } = useParams();

  const rightProject = Projets.find((p) => p.link === projet);

  return (
    <main>
      <Background />
      <h1>Bienvenue sur le projet {rightProject.name}</h1>
    </main>
  );
}
