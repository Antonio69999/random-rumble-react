import React from "react";
import ButtonCapacity from "./ButtonCapacity";
import ProgressBar from "./ProgressBar";

const PlayerCard = ({ player }) => {
  return (
    <div
      key={player.id}
      className="PlayerCard"
      id={`joueur${player.id}`}
    >
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <div className="image-div">
          <img className="player-image" src={player.img} alt={player.name} />
        </div>
        <ProgressBar
          pv={player.pv}
          pvMax={player.pvMax}
          faType="fa-heart"
          barName=" : pv "
          bgType="bg-danger"
        />
        <ProgressBar
          pv={player.mana}
          pvMax={player.manaMax}
          faType="fa-fire-alt"
          barName=" : mana "
        />

        <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
        <div className="row">
          <div>
            <ButtonCapacity player={player} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
