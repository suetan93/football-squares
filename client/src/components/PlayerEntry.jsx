import React from 'react';

const PlayerEntry = ({ player, selectPlayer }) => {

  return (
    <div className="player-entry">
      <div>{player.firstName}</div>
      <div>{player.initials}</div>
      <div>{player.count}</div>
      <button onClick={selectPlayer}>Select</button>
    </div>
  )
};

export default PlayerEntry;