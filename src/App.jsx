import Projets from "../src/assets/Projets.json";

export default function App() {
  return (
    <main>
      {Projets.map((projet, i) => {
        return (
          <div key={i} className="image">
            <img src={projet.image} alt={projet.name} />
          </div>
        );
      })}
    </main>
  );
}
