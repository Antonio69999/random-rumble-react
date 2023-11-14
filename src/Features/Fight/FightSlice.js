import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
  ],
  monster: {
    pv: "500",
    pvMax: "500",
  },
};
export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
  },
});

export const { hitMonster } = fightSlice.actions;
export default fightSlice.reducer;
