import React from 'react';

const SecGame = ({ clickedButton, setclickedButton, score, setScore }) => {
  const [num, setNum] = React.useState(1); 
  const randomNumer = () => {
    if (clickedButton === null) {
      alert("Please Select a button");
    } else {
      const number = Math.floor(Math.random() * 6) + 1; 
      setNum(number); 

      if (clickedButton === number) {
        setScore(score + 5); 
      } else {
        setScore(score - 1); 
      }
    }
  };
  const resetScore = () => {
    setScore(0); 
    setclickedButton(null);
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
        {}
        <p>Current Dice Number: {num}</p>
      </div>
    </div>
  );
};

export default SecGame;
