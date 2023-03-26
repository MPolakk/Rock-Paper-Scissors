import './styles/main.scss'
import ScoreBoard from './components/ScoreBoard';
import PickingBoard from './components/PickingBoard';
import Rules from './components/Rules';
import GameBoard from './components/GameBoard';

function App() {

  return (
    <div className="App">
      <ScoreBoard />
      {/* <PickingBoard /> */}
      <GameBoard />
      <Rules />
    </div>
  );
}

export default App;
