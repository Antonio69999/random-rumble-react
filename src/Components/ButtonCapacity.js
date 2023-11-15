import React from "react";
import { useDispatch } from "react-redux";
import { hitMonster, hitBack } from "../Features/Fight/FightSlice";

const ButtonCapacity = ({ player }) => {
  const dispatch = useDispatch();

  const combat = () => {
    dispatch(
      hitMonster({
        monsterDecreasePv: 5,
      }),
      dispatch(
        hitBack({
          playerHit: player.id - 1,
          playerDecreasePv: 5,
        })
      )
    );
  };
  return (
    <button
      disabled={player.pv === 0}
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
