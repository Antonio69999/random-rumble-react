import fightReducer from "../Features/Fight/FightSlice";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    fight: fightReducer,
  },
});
