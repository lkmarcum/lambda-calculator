import React from "react";

function SpecialButton({ spec }) {
  return (
    <button
      className="special-button"
      key={spec}
      onClick={() => console.log(spec)}
    >
      {spec}
    </button>
  );
}

export default SpecialButton;
