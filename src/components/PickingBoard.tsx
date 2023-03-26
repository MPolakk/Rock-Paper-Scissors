import Rock from './Rock'
import Scissors from './Scissors';
import Paper from './Paper';




const GameBoard = () => {
   return (
      <div className="picking-board">
         <div>
            <Paper active="symbol-active" />
            <Scissors active="symbol-active" />
            <Rock active="symbol-active" />
            <span className="line first-line"></span>
            <span className="line sec-line"></span>
            <span className="line third-line"></span>
         </div>
      </div>
   );
}

export default GameBoard;