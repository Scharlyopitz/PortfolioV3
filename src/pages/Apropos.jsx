import AproposData from "../assets/AproposData.json";

export default function Apropos() {
  return (
    <main>
      <div className="descriptionContainer">
        {AproposData[0].split(" ").map((word, i) => {
          return <p key={i}>{word}</p>;
        })}
      </div>
    </main>
  );
}
