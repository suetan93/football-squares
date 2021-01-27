import React, {useState} from 'react';
import PlayerEntry from './PlayerEntry.jsx';
import AddForm from './AddForm.jsx';

const PlayerList = ({ players, selectPlayer, currentPlayer, addNewPlayer, deletePlayer, displayForm, showForm }) => {

  return (
    <div className="list">
      <div className="modules">
        <div className="headings">
          CURRENT PLAYER
        </div>
        <div className="current-player">
          <div>{currentPlayer ? `${currentPlayer.firstName} ${currentPlayer.lastName[0]}` : ''}</div>
          <div>{currentPlayer ? currentPlayer.initials : ''}</div>
          <div>{currentPlayer ? currentPlayer.count : ''}</div>
          {currentPlayer ? <button onClick={deletePlayer}>Delete Player</button> : null}
        </div>
          {!showForm ? <button onClick={displayForm}>Add New Player</button> : null}
          {showForm ? <AddForm displayForm={displayForm} addNewPlayer={addNewPlayer} /> : null}
      </div>

      <div className="modules player-list">
        <div className="headings">
          ALL PLAYERS
        </div>
        <div className="list-titles">
          <div>PLAYERS</div>
          <div>INITIALS</div>
          <div>#SQs</div>
        </div>
        <div className="players">
          {players ? players.map((player, i) => (<PlayerEntry player={player} key={i} selectPlayer={() => selectPlayer(i)} />)) : 'No players'}
        </div>
      </div>
    </div>

  )
};

export default PlayerList;