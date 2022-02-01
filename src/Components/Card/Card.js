import React from "react";

export const Card = ({ card, className, showCard }) => {
  return (
    <div
      className={className}
      key={card.id}
      onClick={() => {
        showCard(card.id, card.value, "openedCard", card.img);
      }}
    >
      {card.displayImg === "" ? (
        ""
      ) : (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src={card.displayImg} className="image" alt="image"/>
        
      )}
    </div>
  );
};
