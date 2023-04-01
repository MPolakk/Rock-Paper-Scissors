import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './reducers/gameSlice'

const store = configureStore({
   reducer: {
      gameSlice: gameSlice
   }
})



export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch