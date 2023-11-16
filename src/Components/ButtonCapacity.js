import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hitMonster, hitBack, playerHeal } from "../Features/Fight/FightSlice";

const ButtonCapacity = ({ player }) => {
  const dispatch = useDispatch();
  const playerWin = useSelector((state) => state.fight.playersWin);

  const randomDamage = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
  };

  const randomHealPv = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
  };

  const combat = () => {
    dispatch(
      hitMonster({
        monsterDecreasePv: randomDamage(5, 10),
      }),
      dispatch(
        hitBack({
          playerHit: player.id - 1,
          playerDecreasePv: randomDamage(5, 10),
        })
      )
    );
  };

  const healPlayer = () => {
    dispatch(
      playerHeal({
        playerHeal: player,
        playerHealPv: randomHealPv(5, 10),
      })
    );
  };
  return (
    <>
      <button
        disabled={player.pv <= 0 || playerWin}
        type="button"
        onClick={() => combat()}
        className="btn btn-success material-tooltip-main "
      >
        Tears
      </button>
      <button
        disabled={player.mana <= 0 || playerWin}
        type="button"
        onClick={() => healPlayer()}
        className="btn btn-success material-tooltip-main "
      >
        Yum' Heart
      </button>
    </>
  );
};

export default ButtonCapacity;
