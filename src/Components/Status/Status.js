import React from "react";
import './Status.css';
export const Status = ({ text, amount }) => {
  return (
    <div className="gameStatus">
      <p className="statusBlock">
        <span>{text}</span> 
        <span className="statusAmount">{amount}</span>
      </p>
    </div>
  );
};
