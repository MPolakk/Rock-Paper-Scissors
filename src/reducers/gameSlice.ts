import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
   picked: boolean
   pick: string | undefined
   pick2nd: string | undefined
   youWin: boolean | undefined
   draw: boolean
   score: number
   page: string
   gameSymbols: string[]
   gameRules: string[][],
   rulesActive: boolean
}

const initialState: CounterState = {
   picked: false,
   pick: undefined,
   pick2nd: undefined,
   youWin: undefined,
   draw: false,
   score: 0,
   page: "",
   gameSymbols: ['Paper', 'Scissors', 'Rock'],
   gameRules: [
      //Winer ---- Loser
      ["Paper", "Rock"],
      ["Rock", "Scissors"],
      ["Scissors", "Paper"]
   ],
   rulesActive: false,
};

const gameSlice = createSlice({
   name: 'game',
   initialState,
   reducers: {
      pick1(state, action: PayloadAction<string>) {
         state.pick = action.payload
      },
      pick2(state, action: PayloadAction<string>) {
         state.pick2nd = action.payload
      },
      isPicked(state, action: PayloadAction<boolean>) {
         state.picked = action.payload
      },
      isWinner(state, action: PayloadAction<boolean>) {
         state.youWin = action.payload
      },
      isDraw(state, action: PayloadAction<boolean>) {
         state.draw = action.payload
      },
      playAgain(state) {
         return {
            ...state,
            picked: false,
            pick: undefined,
            pick2nd: undefined,
            youWin: undefined,
            draw: false
         }

      },
      scoreCounter(state, action) {
         if (action.payload === -1 && state.score > 0) {
            state.score--
         } else if (action.payload === 1) {
            state.score++
         }

      },
      isRulesActive(state) {
         state.rulesActive = !state.rulesActive
      }

   },
});

export const { pick1, pick2, isPicked, isDraw, isWinner, playAgain, scoreCounter, isRulesActive } = gameSlice.actions;


export default gameSlice.reducer