import './styles/main.scss'
import ScoreBoard from './components/ScoreBoard';
import PickingBoard from './components/PickingBoard';
import Rules from './components/Rules';
import GameBoard from './components/GameBoard';
import PlayAgain from './components/PlayAgain';
import PopUpRules from './components/PopUpRules';
import { useAppSelector, useAppDispatch } from './hooks';
import { useEffect, useState } from 'react';
function App() {
  const { picked, pick2nd, rulesActive } = useAppSelector(state => state.gameSlice)

  const [widthUpdate, setWidthUpdate] = useState(0)
  const widthHandler = () => {

    setWidthUpdate(window.innerWidth)

  };

  useEffect(() => {

    window.addEventListener('resize', widthHandler);
    widthHandler();
    return () => window.removeEventListener('resize', widthHandler);
  }, [])


  return (
    <div className="App">
      <ScoreBoard />
      {picked ? <GameBoard widthUpdate={widthUpdate} /> : <PickingBoard />}
      {pick2nd && widthUpdate < 1366 ? <PlayAgain /> : null}
      <Rules />
      {rulesActive ? <PopUpRules /> : null}
    </div>
  );
}

export default App;
