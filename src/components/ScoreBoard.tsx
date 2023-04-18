import logo from '../images/logo.svg'
import { useAppSelector } from '../hooks'


const ScoreBoard = () => {


   const { score } = useAppSelector(state => state.gameSlice)

   return (
      <div className="score-board">
         <div className="score-board_logo" style={{ backgroundImage: `url(${logo})` }}>

         </div>

         <div className="score-board_score">
            <span>score</span>
            <span className="score-number">{score}</span>
         </div>
      </div>);
}

export default ScoreBoard;