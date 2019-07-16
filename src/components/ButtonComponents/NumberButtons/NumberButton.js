import React from "react";

function NumberButton({ change, num }) {
  return (
    <button key={num} onClick={() => change(num)}>
      {num}
    </button>
  );
}

export default NumberButton;
