import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hitMonster, hitBack } from "../Features/Fight/FightSlice";

const ButtonCapacity = ({ player }) => {
  const dispatch = useDispatch();
  const playerWin = useSelector((state) => state.fight.playersWin);

  const randomDamage = (min, max) => {
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
  return (
    <button
      disabled={player.pv <= 0 || playerWin}
      type="button"
      onClick={() => combat()}
      className="btn btn-success material-tooltip-main "
    >
      hit
      <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> - 5
    </button>
  );
};

export default ButtonCapacity;
