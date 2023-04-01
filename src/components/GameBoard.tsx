
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from "../hooks";
import { pick2, isWinner, isDraw, scoreCounter } from '../reducers/gameSlice'
import Rock from "./Rock";
import Paper from "./Paper";
import BlankSpace from "./BlankPlace";
import GlowEffect from './GlowEffect';
import PlayAgain from "./PlayAgain";
import Scissors from "./Scissors";



const GameBoard = () => {

   const { pick, pick2nd, gameRules, draw, gameSymbols, youWin } = useAppSelector(state => state.gameSlice)
   const dispatch = useAppDispatch()

   const winnerGlowEffect = (item: string) => {
      if (draw) return;
      if (youWin && item === pick || !youWin && item === pick2nd) {
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





   const randomSymbol = () => {
      const randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
      const symbol = gameSymbols[randomNumber]
      dispatch(pick2(gameSymbols[randomNumber]));
      checkWinner(symbol)
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
   useEffect(() => {
      setTimeout(randomSymbol, 1000)

   }, [pick])



   return (
      <div className="game-board">
         <div className="game-board__container">
            {renderPickedSymbol()}

            {pick2nd === undefined ? <BlankSpace /> : renderPickedSymbol2nd()}
            <span>you picked</span>
            <span> the house picked</span>


         </div>
      </div >
   );
}

export default GameBoard;