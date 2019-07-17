import React from "react";

function NumberButton({ change, num }) {
  if (num === "0") {
    return (
      <button
        className="num-button zero-button"
        key={num}
        onClick={() => change(num)}
      >
        {num}
      </button>
    );
  } else {
    return (
      <button className="num-button" key={num} onClick={() => change(num)}>
        {num}
      </button>
    );
  }
}

export default NumberButton;
