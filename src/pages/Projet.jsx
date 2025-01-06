import React from "react";
import Projets from "../assets/Projets.json";
import { useParams } from "react-router-dom";

export default function Projet() {
  const { projet } = useParams();

  const rightProject = Projets.find((p) => p.link === projet);

  return <div>Bienvenue sur le projet {rightProject.name}</div>;
}
