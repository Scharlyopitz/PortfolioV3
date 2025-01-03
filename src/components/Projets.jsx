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
            <div className="titleContainer">
              <h1>0{i + 1}</h1>
              <h1>{projet.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
