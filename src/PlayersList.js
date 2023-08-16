import React from "react";
import Players from "./Players";
import Cardplayer from "./Player";
import "./PlayersList.css";

function PlayersList() {
  return (
    <div className="liste">
      {Players.map((el) => (
        <Cardplayer el={el} />
      ))}
    </div>
  );
}

export default PlayersList;
