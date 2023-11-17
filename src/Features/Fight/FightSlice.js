import { createSlice } from "@reduxjs/toolkit";

// IMAGES
import Isaac from "../../Assets/Images/isaac.png";
import Magdalene from "../../Assets/Images/magdalene.png";
import Judas from "../../Assets/Images/judas.png";
import Lilith from "../../Assets/Images/lilith.png";

import RedHeart from "../../Assets/Images/redHeart.png";

const initialState = {
  players: [
    {
      name: "Isaac",
      pv: 100,
      pvIcon: { RedHeart },
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      img: Isaac,
      canPlay: true,
      id: 1,
    },
    {
      name: "Magdalene",
      pv: 100,
      pvIcon: { RedHeart },
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      img: Magdalene,
      canPlay: true,
      id: 2,
    },
    {
      name: "Judas",
      pv: 100,
      pvIcon: { RedHeart },
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      img: Judas,
      canPlay: true,
      id: 3,
    },
    {
      name: "Lilith",
      pv: 100,
      pvIcon: { RedHeart },
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      img: Lilith,
      canPlay: true,
      id: 4,
    },
  ],
  monster: {
    pv: "150",
    pvMax: "150",
  },
  playersWin: false,
  monsterWin: false,
  playerPlayed: 0,
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
    playerHeal: (state, action) => {
      const player = state.players[action.payload.playerHeal.id - 1];
      player.pv += action.payload.playerHealPv;
      player.mana -= action.payload.playerHealPv;

      if (player.mana <= 0) {
        player.mana = 0;
      }
      if (player.pv >= player.pvMax) {
        player.pv = player.pvMax;
      }
    },
    endOfTurn: (state, action) => {
      state.players[action.payload.player].canPlay = false;

      if (state.playerPlayed + 1 === state.players.length) {
        state.playerPlayed = 0;
        state.players.forEach((player) => {
          player.canPlay = true; //tous les joueurs peuvent rejouer
        });
      } else {
        state.playerPlayed += 1;
      }
    },
  },
});

export const { hitMonster, hitBack, playerHeal, endOfTurn } =
  fightSlice.actions;
export default fightSlice.reducer;
