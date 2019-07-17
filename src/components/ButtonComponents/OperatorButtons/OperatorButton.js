import React from "react";

function OperatorButton({ opp }) {
  return (
    <button
      className="op-button"
      key={opp.char}
      onClick={() => console.log(opp.value)}
    >
      {opp.char}
    </button>
  );
}

export default OperatorButton;
