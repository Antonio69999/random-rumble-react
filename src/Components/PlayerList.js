import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = () => {
  const [players, setPlayers] = useState({
    1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
  });

  const displayPlayers = () => {
    return Object.keys(players).map((key) => (
      <PlayerCard key={players[key].id} player={players[key]} />
    ));
  };

  return <div className="row">{displayPlayers()}</div>;
};

export default PlayerList;
