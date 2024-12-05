import React from 'react';

const SecGame = ({ clickedButton, setclickedButton, score, setScore }) => {
  const [num, setNum] = React.useState(1); // Dice number state

  const randomNumer = () => {
    if (clickedButton === null) {
      alert("Please Select a button");
    } else {
      const number = Math.floor(Math.random() * 6) + 1; // Generate random number
      setNum(number); // Update dice number state

      if (clickedButton === number) {
        setScore(score + 5); // Increment score if guessed correctly
      } else {
        setScore(score - 1); // Decrement score if guessed wrong
      }
    }
  };

  const resetScore = () => {
    setScore(0); // Reset score to 0
    setclickedButton(null); // Reset the selected button
  };

  return (
    <div className='sec-details'>
      <div className='dice-menu'>
        <img
          className='img-dice'
          src={`images/dices/dice${num}.png`}
          alt="Dice"
          onClick={randomNumer}
        />
        <p>Click on Dice to roll</p>
        <div className='btn'>
          <button className='bts' onClick={resetScore}>
            Reset Score
          </button>
        </div>
        {/* Render the score directly from the props */}
        <p>Current Dice Number: {num}</p>
      </div>
    </div>
  );
};

export default SecGame;
