import React, { useState } from "react";
import "./Test.css";
import cards from "../Sdata";
function Card({ title, description, imageUrl }) {
  const [fullScreen, setFullScreen] = useState(false);
  // const [classnamedis, setclassnamedis] = useState("");

  const handleCardClick = () => {
    setFullScreen(true);
  };

  const handleCloseClick = (event) => {
    // Prevent the click event from propagating to the parent element
    event.stopPropagation();
    setFullScreen(false);
  };

  return (
    <div className={fullScreen ? "full-screen-card" : "card"} onClick={handleCardClick}>
     <h1 className={fullScreen ? "heading2" : "heading1"}>summary </h1>
      <img src={imageUrl} alt={title} className="imghai" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className={fullScreen ? "card-description" : "card-description1"}>{description}</p>
      </div>
      {fullScreen && (
        <button className="close-btn" onClick={handleCloseClick}>
  &times;
</button>
      )}
    </div>
  );
}

export default function App() {
//   const cards = [
//     {
//       title: "Card 1",
//       description: "This is the first card.",
//       imageUrl: "https://via.placeholder.com/300x200?text=Card+1",
//     },
//     {
//       title: "Card 2",
//       description: "This is the second card.",
//       imageUrl: "https://via.placeholder.com/300x200?text=Card+2",
//     },
//     {
//       title: "Card 3",
//       description: "This is the third card.",
//       imageUrl: "https://via.placeholder.com/300x200?text=Card+3",
//     },
//   ];

  return (
    <div className="App">
      <h1 className="heading">List of top {cards.length} show </h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.show.name}
            description={card.show.summary}
            imageUrl={card.show.image==null ?"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg":card.show.image.original} />
        ))}
      </div>
    </div>
  );
}
