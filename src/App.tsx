import './styles/main.scss'
import ScoreBoard from './components/ScoreBoard';
import PickingBoard from './components/PickingBoard';
import Rules from './components/Rules';
import GameBoard from './components/GameBoard';
import PlayAgain from './components/PlayAgain';

function App() {

  return (
    <div className="App">
      <ScoreBoard />
      {/* <PickingBoard /> */}
      <GameBoard />
      <PlayAgain />
      <Rules />
    </div>
  );
}

export default App;
