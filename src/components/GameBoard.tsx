import Rock from "./Rock";
import Paper from "./Paper";
import BlankSpace from "./BlankPlace";
import PlayAgain from "./PlayAgain";




const GameBoard = () => {
   return (
      <div className="game-board">
         <div className="game-board__container">

            <Rock />
            {/* <BlankSpace /> */}
            <Paper />
            <span>you picked</span>
            <span>the house picked</span>


         </div>
      </div>
   );
}

export default GameBoard;