import React from "react";

function NumberButton({ changeDisplay, num }) {
  return (
    <button key={num} onClick={num => changeDisplay}>
      {num}
    </button>
  );
}

export default NumberButton;
