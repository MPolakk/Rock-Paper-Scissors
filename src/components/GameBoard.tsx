import Rock from "./Rock";
import Paper from "./Paper";
import BlankSpace from "./BlankPlace";
const GameBoard = () => {
   return (
      <div className="game-board">
         <div>
            <Rock />
            <BlankSpace />
            {/* <Paper /> */}
            <span>you picked</span>
            <span>the house picked</span>


         </div>
      </div>
   );
}

export default GameBoard;