import { configureStore } from "@reduxjs/toolkit";
import fightReducer from "../Features/Fight/FightSlice";

export const store = configureStore({
    
  reducer: {
    fight: fightReducer,
  },
});
