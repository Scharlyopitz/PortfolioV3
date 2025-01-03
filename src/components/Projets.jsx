import ProjetsData from "../assets/Projets.json";

export default function Projets() {
  return (
    <>
      {ProjetsData.map((projet, i) => {
        return (
          <div key={i} className="image">
            <img src={projet.image} alt={projet.name} />
          </div>
        );
      })}
    </>
  );
}
