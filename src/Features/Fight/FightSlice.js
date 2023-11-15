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
      // state.monster = {
      //   ...state.monster,
      //   pv: state.monster.pv - action.payload.monsterDecreasePv
      // }
      if (state.players.pv === 0) {
        return state;
      }
      state.monster.pv -= action.payload.monsterDecreasePv; // toolkit
    },
    hitBack: (state, action) => {
      const playerPV = state.players[action.payload.playerHit].pv;
      if (playerPV === 0) {
        return state;
      }
      state.players[action.payload.playerHit].pv -=
        action.payload.playerDecreasePv;
    },
  },
});

export const { hitMonster, hitBack } = fightSlice.actions;
export default fightSlice.reducer;
