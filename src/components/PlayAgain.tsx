import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";
import { playAgain } from '../reducers/gameSlice'

const PlayAgain = () => {
   const { youWin, draw } = useAppSelector(state => state.gameSlice);

   const dispatch = useAppDispatch();

   const playAgainHandler = () => {
      dispatch(playAgain())

   }


   return (
      <div className="play-again">
         <span className="play-again__text">{draw ? 'draw' : `You ${youWin ? 'win' : 'lose'}`}</span>
         <button onClick={playAgainHandler} className="play-again__button">Play again</button>
      </div>
   );
}

export default PlayAgain;