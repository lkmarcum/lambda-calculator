import React from "react";

function SpecialButton({ spec }) {
  return (
    <button key={spec} onClick={() => console.log(spec)}>
      {spec}
    </button>
  );
}

export default SpecialButton;
