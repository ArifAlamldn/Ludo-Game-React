const Start = ({start,setStart}) => {
    const gameStart = ()=>{
        setStart(!start)  
    }
    return (
      <div className="start">
        <img className="img" src="/images/dices1.png" alt="Dice" />
        <div className="Start-detial">
            <h1>Dice Game</h1>
            <button className="btn" onClick={gameStart}>Play Game</button>
        </div>
      </div>
    );
  };
  
  export default Start;
  