import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // TODO : Compléter 'players' et 'monster'
  players: [],
  monster: { pv: "1000", pvMax: "1000" },
};
export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {},
});
export default fightSlice.reducer;
