import React from "react";
import "./RenderModalMessage.css";

export const RenderModalMessage = ({ status, moves, onRestart }) => {
  const winningMessage = `HURRAY, YOU WON! \n YOU MADE IT IN ${moves} MOVES`;
  const losingMessage = `UNFORTUNATELY, YOU'VE LOST, \n YOU DON'T HAVE ANY MOVES`;
  const refreshPage = () => {
   // window.location.reload();
      onRestart();
  };

  const finalMessage =
    status === "win" ? (
      <p className="gameStatus finalMessage">{winningMessage}</p>
    ) : (
      <p className="gameStatus finalMessage">{losingMessage}</p>
    );
  return (
    <div className="modal">
      {finalMessage}

      <button
        className="button gameStatus"
        onClick={refreshPage}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};
