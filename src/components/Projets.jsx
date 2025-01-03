import ProjetsData from "../assets/Projets.json";

export default function Projets() {
  return (
    <div className="ProjetsContainer">
      {ProjetsData.map((projet, i) => {
        return (
          <div key={i} className="Projet">
            <div className="image">
              <img src={projet.image} alt={projet.name} />
            </div>
            <h1>{projet.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
