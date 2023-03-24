import logo from '../images/logo.svg'

const ScoreBoard = () => {
   return (
      <div className="score-board">
         <div className="score-board_logo" style={{ backgroundImage: `url(${logo})` }}>

         </div>

         <div className="score-board_score">
            <span>score</span>
            <span className="score-number">12</span>
         </div>
      </div>);
}

export default ScoreBoard;