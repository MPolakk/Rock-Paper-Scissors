
import { useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from "../hooks";
import { pick2, isWinner, isDraw, scoreCounter } from '../reducers/gameSlice'
import Rock from "./Rock";
import Paper from "./Paper";
import BlankSpace from "./BlankPlace";
import Scissors from "./Scissors";
import PlayAgain from './PlayAgain';
import { useState } from 'react';


const GameBoard = (props: { widthUpdate: number }) => {

   const { pick, pick2nd, gameRules, draw, gameSymbols, youWin } = useAppSelector(state => state.gameSlice)
   const dispatch = useAppDispatch()


   const winnerGlowEffect = (item: string) => {
      if (draw) return;
      if ((youWin && item === pick) || (!youWin && item === pick2nd)) {
         return true
      }
   }


   const renderPickedSymbol = () => {
      switch (pick) {
         case "Paper":
            return <Paper effect={winnerGlowEffect} />
         case "Rock":
            return <Rock effect={winnerGlowEffect} />
         case "Scissors":
            return <Scissors effect={winnerGlowEffect} />
      }
   }
   const renderPickedSymbol2nd = () => {
      switch (pick2nd) {
         case "Paper":
            return <Paper effect={winnerGlowEffect} />
         case "Rock":
            return <Rock effect={winnerGlowEffect} />
         case "Scissors":
            return <Scissors effect={winnerGlowEffect} />
      }
   }



   const checkWinner = (symbol: string) => {
      if (pick === symbol) return dispatch(isDraw(true))
      gameRules.forEach(item => {
         if (item[0] === pick && item[1] === symbol) {
            dispatch(isWinner(true))
            dispatch(scoreCounter(1))

         } else if (item[1] === pick && item[0] === symbol) {
            dispatch(isWinner(false))
            dispatch(scoreCounter(-1))
         }
      })

   }

   const randomSymbol = useCallback(() => {
      const randomNumber = Math.floor(Math.random() * (2 - 0));
      const symbol = gameSymbols[randomNumber]
      console.log(randomNumber)
      dispatch(pick2(gameSymbols[randomNumber]));



      checkWinner(symbol)
   }, [])


   useEffect(() => {
      setTimeout(randomSymbol, 1000)

   }, [randomSymbol])



   return (
      <div className="game-board">
         <div className="game-board__container">
            {renderPickedSymbol()}

            {pick2nd === undefined ? <BlankSpace /> : renderPickedSymbol2nd()}
            <span className="container__you">you picked</span>
            <span className="container__enemy"> the house picked</span>
            {pick2nd && props.widthUpdate >= 1366 ? <PlayAgain /> : null}

         </div>
      </div >
   );
}

export default GameBoard;