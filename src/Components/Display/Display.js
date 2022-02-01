/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";
import { DisplayCard } from "../DisplayCards/DisplayCard";
import "../DisplayCards/DisplayCard.css";
import IMAGES from "../../assets/index";
import { Status } from "../Status/Status";
import { RenderModalMessage } from "../ModalMessage/RenderModalMessage";

export const Display = () => {
  const TOTALMOVES = 40;
  const [openCardsAmt, setOpenCardsAmt] = useState(0);
  const [openCardsId, setOpenCardsId] = useState([]);
  const [preventClick, setPreventClick] = useState("");
  const [moves, setMoves] = useState(0);
  const cards = [
    {
      id: 1,
      display: "closedCard",
      value: 1,
      img: IMAGES.type1,
      displayImg: IMAGES.standard,
    },
    {
      id: 2,
      display: "closedCard",
      value: 1,
      img: IMAGES.type1,
      displayImg: IMAGES.standard,
    },
    {
      id: 3,
      display: "closedCard",
      value: 2,
      img: IMAGES.type2,
      displayImg: IMAGES.standard,
    },
    {
      id: 4,
      display: "closedCard",
      value: 2,
      img: IMAGES.type2,
      displayImg: IMAGES.standard,
    },
    {
      id: 5,
      display: "closedCard",
      value: 3,
      img: IMAGES.type3,
      displayImg: IMAGES.standard,
    },
    {
      id: 6,
      display: "closedCard",
      value: 3,
      img: IMAGES.type3,
      displayImg: IMAGES.standard,
    },
    {
      id: 7,
      display: "closedCard",
      value: 4,
      img: IMAGES.type4,
      displayImg: IMAGES.standard,
    },
    {
      id: 8,
      display: "closedCard",
      value: 4,
      img: IMAGES.type4,
      displayImg: IMAGES.standard,
    },
    {
      id: 9,
      display: "closedCard",
      value: 5,
      img: IMAGES.type5,
      displayImg: IMAGES.standard,
    },
    {
      id: 10,
      display: "closedCard",
      value: 5,
      img: IMAGES.type5,
      displayImg: IMAGES.standard,
    },
    {
      id: 11,
      display: "closedCard",
      value: 6,
      img: IMAGES.type6,
      displayImg: IMAGES.standard,
    },
    {
      id: 12,
      display: "closedCard",
      value: 6,
      img: IMAGES.type6,
      displayImg: IMAGES.standard,
    },
    {
      id: 13,
      display: "closedCard",
      value: 7,
      img: IMAGES.type7,
      displayImg: IMAGES.standard,
    },
    {
      id: 14,
      display: "closedCard",
      value: 7,
      img: IMAGES.type7,
      displayImg: IMAGES.standard,
    },
    {
      id: 15,
      display: "closedCard",
      value: 8,
      img: IMAGES.type8,
      displayImg: IMAGES.standard,
    },
    {
      id: 16,
      display: "closedCard",
      value: 8,
      img: IMAGES.type8,
      displayImg: IMAGES.standard,
    },
  ];
  const sortedCards = cards.sort(() => 0.5 - Math.random());

  const [arrayCards, setArrayCards] = useState(sortedCards);
  const [renderModal, setRenderModal] = useState(false);
  const [gameStatusFlag, setGameStatusFlag] = useState("");


  const gameStatus = () => {
    if (
      arrayCards.filter((card) => card.display === "inactiveCard").length === 16
    ) {
      setRenderModal(true);
      setGameStatusFlag("win");
    } else if (moves === 40) {
      setRenderModal(true);
      setGameStatusFlag("lose");
    }
  };

  //const [statusResult] = useStatus(card, )
  const checkMatch = () => {
    if (openCardsId[0].value === openCardsId[1].value) {
      console.log(openCardsId[0], openCardsId[1]);
      openCardsId.map((card) =>
        showCard(card.id, card.value, "inactiveCard", "")
      );
    } else {
      openCardsId.map((card) =>
        showCard(card.id, card.value, "closedCard", IMAGES.standard)
      );
    }
    setPreventClick("");
    setOpenCardsAmt(0);
  };
  useEffect(() => {
    if (openCardsAmt === 2) {
      setMoves((prevState) => {
        return prevState + 1;
      });
      setPreventClick("preventClick");
      setTimeout(checkMatch, 500);
    }
  }, [openCardsAmt]);
  useEffect(() => {
    gameStatus();
  }, [gameStatus]);

  const showCard = (idElem, valueElem, displayPic, cardImg) => {
    setArrayCards((prevArr) => [
      ...prevArr.map((el) => {
        if (el.id === idElem) {
          return {
            ...el,
            id: idElem,
            display: displayPic,
            value: valueElem,
            displayImg: cardImg,
          };
        } else {
          return el;
        }
      }),
    ]);
    setOpenCardsAmt((prevState) => prevState + 1);
    if (displayPic === "openedCard") {
      setOpenCardsId((prevState) => {
        return prevState.concat({ id: idElem, value: valueElem });
      });
    } else {
      setOpenCardsId([]);
    }
  };
   const onRestart=()=>{
     setRenderModal(false);
     setGameStatusFlag('');
     setArrayCards(sortedCards);
     setMoves(0);

   }
  return (
    <div className="mainContainer">
      <div className="header">MEMORY</div>

      <div>{cards.slice(0,1).img}</div>
      <div className="sideInfo1">
        <Status text="MOVES MADE" amount={moves} />
      </div>
      <div className="sideInfo2">
        <Status text="MOVES LEFT" amount={TOTALMOVES - moves} />
      </div>
      <p>{renderModal}</p>
      {renderModal ? (
        <RenderModalMessage
          status={gameStatusFlag}
          moves={moves}
          onRestart={onRestart}
        />
      ) : (
        ""
      )}
      <DisplayCard
        cardsArray={arrayCards}
        showCard={showCard}
        additionalClass={preventClick}
      />
     
    </div>
  );
};
