import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "../components/TitlePage";

export default function Error() {
  return (
    <main>
      <TitlePage title="404 Not Found" />
      <Link to={"/"}>Retour à l'accueil</Link>
    </main>
  );
}
