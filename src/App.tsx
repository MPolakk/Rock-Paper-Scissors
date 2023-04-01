import './styles/main.scss'
import ScoreBoard from './components/ScoreBoard';
import PickingBoard from './components/PickingBoard';
import Rules from './components/Rules';
import GameBoard from './components/GameBoard';
import PlayAgain from './components/PlayAgain';
import PopUpRules from './components/PopUpRules';
import { useAppSelector } from './hooks';
function App() {
  const { picked, pick2nd, rulesActive } = useAppSelector(state => state.gameSlice)
  return (
    <div className="App">
      <ScoreBoard />
      {picked ? <GameBoard /> : <PickingBoard />}
      {pick2nd ? <PlayAgain /> : null}
      <Rules />
      {rulesActive ? <PopUpRules /> : null}
    </div>
  );
}

export default App;
