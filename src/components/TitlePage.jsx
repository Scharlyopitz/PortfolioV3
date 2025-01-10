import { useEffect } from "react";

export default function TitlePage({ title }) {
  useEffect(() => {
    document.title = `Scharly Opitz — ${title}`;
  }, []);
}
