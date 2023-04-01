import Rock from './Rock'
import Scissors from './Scissors';
import Paper from './Paper';

import { useAppDispatch } from '../hooks'
import { pick1, isPicked } from '../reducers/gameSlice'



const GameBoard = () => {
   const dispatch = useAppDispatch();


   const pickSymbol = (e: MouseEvent) => {
      const pick = e.target as HTMLButtonElement;
      dispatch(pick1(pick.name));
      dispatch(isPicked(true))
   }
   return (
      <div className="picking-board">
         <div>
            <Paper pickSymbol={pickSymbol} active="symbol-active" />
            <Scissors pickSymbol={pickSymbol} active="symbol-active" />
            <Rock pickSymbol={pickSymbol} active="symbol-active" />
            <span className="line first-line"></span>
            <span className="line sec-line"></span>
            <span className="line third-line"></span>
         </div>
      </div>
   );
}

export default GameBoard;