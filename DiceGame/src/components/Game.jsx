import React, { useState } from "react";
import SecGame from "./SecGame";

const Game = () => {
  const [score,setScore] = useState(0)
  const [clickedButton, setClickedButton] = useState(null); // Track the clicked button

  const btnSelect = (value) => {
    setClickedButton(value); // Set the clicked button's value
    console.log("Button clicked:", value);
  };

  return (
    <div className=" plus">
      <div className="first-col">
        <div className="score">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="second-col">
          {[1, 2, 3, 4, 5, 6].map((val) => (
            <button
              key={val} // Unique key for React
              className="btns"
              style={{
                backgroundColor: clickedButton === val ? "black" : "white",
                color: clickedButton === val ? "white" : "black",
              }} // Conditionally change background and text color
              onClick={() => btnSelect(val)} // Pass the button value to btnSelect
            >
              {val}
            </button>
          ))}
        </div>
      </div>
      <SecGame 
      score={score} setScore={setScore}
      clickedButton={clickedButton} setClickedButton={setClickedButton}/>
    </div>
  );
};

export default Game;
