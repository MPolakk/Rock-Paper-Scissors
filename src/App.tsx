import './styles/main.scss'
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';
import Rules from './components/Rules';

function App() {

  return (
    <div className="App">
      <ScoreBoard />
      <GameBoard />
      <Rules />
    </div>
  );
}

export default App;
