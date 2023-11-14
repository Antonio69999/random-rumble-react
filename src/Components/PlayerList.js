import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "./PlayerCard";

const PlayerList = () => {
  const players = useSelector((state) => state.fight.players);

  //Since player is an array we didn't need to iterate over the Object
  const displayPlayers = () => {
    return players.map((player) => (
      <PlayerCard key={player.id} player={player} />
    ));
  };

  return <div className="row">{displayPlayers()}</div>;
};

export default PlayerList;
