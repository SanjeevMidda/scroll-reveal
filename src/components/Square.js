import React, { useRef } from "react";

const Square = () => {
  let squareValues = useRef("");

  let values = () => {
    console.log((squareValues.current.style.color = "orange"));
  };
  return (
    <div
      ref={squareValues}
      className="square"
      onClick={(e) => {
        values();
      }}
    >
      Square
    </div>
  );
};

export default Square;
