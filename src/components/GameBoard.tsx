const GameBoard = () => {
   return (
      <div className="game-board">
         <div>
            <button className="paper"></button>
            <button className="scissors"></button>
            <button className="rock"></button>
            <span className="line first-line"></span>
            <span className="line sec-line"></span>
            <span className="line third-line"></span>
         </div>
      </div>
   );
}

export default GameBoard;