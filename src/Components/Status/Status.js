import React from "react";
export const Status = ({ text, amount }) => {
  return (
    <div className="gameStatus">
      <p className="statusText">{text}</p>
      <p className="statusAmount">{amount}</p>
    </div>
  );
};
