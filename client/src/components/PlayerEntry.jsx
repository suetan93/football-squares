import React from 'react';

const PlayerEntry = ({ player, selectPlayer }) => {

  return (
    <div className="player-entry">
      <div className="player-info">
        {player.firstName} {player.lastName[0]}
      </div>
      <div className="player-info">
        {player.initials}
      </div>
      <div className="player-info">
        {player.count}
      </div>
      <div className="player-info">
        <button onClick={selectPlayer} title="Select Player">Select</button>
      </div>
    </div>
  )
};

export default PlayerEntry;