import React from "react";

function OperatorButton({ opp }) {
  return <button key={opp.char}>{opp.char}</button>;
}

export default OperatorButton;
