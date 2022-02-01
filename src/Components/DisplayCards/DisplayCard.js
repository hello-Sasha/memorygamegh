import React from "react";
import "./DisplayCard.css";
import { Card } from "../Card/Card";

export const DisplayCard = ({ cardsArray, showCard, additionalClass = "" }) => {
  return (
    <div className="displayCards">
      {cardsArray.map((card) => (
        <Card
          key={card.id}
          className={`box ${card.display} ${additionalClass}`}
          card={card}
          showCard={showCard}
        />
      ))}
    </div>
  );
};
