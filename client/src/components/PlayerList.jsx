import React from 'react';
import PlayerEntry from './PlayerEntry.jsx'

const PlayerList = ({ players, selectPlayer }) => {


  return (
    <div className="list">
      <div className="current-player">
       CURRENT PLAYER
       <br />
       {/* if initials exist do not add */}
       <button>Add New Player</button>
      </div>
      <div className="list-titles">
        <div>NAME</div>
        <div>INITIALS</div>
        <div>#SQs</div>
      </div>
      <div className="players">
        {players.map((player, i) => (<PlayerEntry player={player} key={i} selectPlayer={() => selectPlayer(i)} />))}
      </div>
    </div>

  )
};

export default PlayerList;