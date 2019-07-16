import React from "react";

function NumberButton({ num }) {
  return <button key={num}>{num}</button>;
}

export default NumberButton;
