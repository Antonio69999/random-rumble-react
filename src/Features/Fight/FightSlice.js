import { createSlice } from "@reduxjs/toolkit";

//IMAGES
import Isaac from "../../Assets/Images/isaac.png";
import Magdalene from "../../Assets/Images/magdalene.png";
import Judas from "../../Assets/Images/judas.png";
import Lilith from "../../Assets/Images/lilith.png";

const initialState = {
  players: [
    {
      name: "Isaac",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      img: Isaac,
      id: 1,
    },
    {
      name: "Magdalene",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      img: Magdalene,
      id: 2,
    },
    {
      name: "Judas",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      img: Judas,
      id: 3,
    },
    {
      name: "Lilith",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      img: Lilith,
      id: 4,
    },
  ],
  monster: {
    pv: "1000",
    pvMax: "1000",
  },
  playersWin: false,
  monsterWin: false,
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster.pv -= action.payload.monsterDecreasePv;
      if (state.monster.pv <= 0) {
        state.monster.pv = 0;
        state.playersWin = true;
      }
    },
    hitBack: (state, action) => {
      const player = state.players[action.payload.playerHit];
      player.pv -= action.payload.playerDecreasePv;

      if (player.pv <= 0) {
        player.pv = 0;
        if (state.players.every((player) => player.pv === 0)) {
          state.monsterWin = true;
        }
      }
    },
  },
});

export const { hitMonster, hitBack } = fightSlice.actions;
export default fightSlice.reducer;
