import React, {useState} from 'react';
import PlayerEntry from './PlayerEntry.jsx';
import AddForm from './AddForm.jsx';

const PlayerList = ({ players, selectPlayer, currentPlayer, addNewPlayer, displayAlert, displayForm, showForm }) => {

  return (
    <div className="list">
      <div className="modules player-box">
        <div className="headings">
          CURRENT PLAYER
        </div>
        <div className="current-player">
          <div className="current-info">
            {currentPlayer ? `${currentPlayer.firstName} ${currentPlayer.lastName[0]}` : <i>none selected</i>}
          </div >
          <div className="current-info">
            {currentPlayer ? currentPlayer.initials :'----'}
          </div>
          <div className="current-info">
            {currentPlayer ? currentPlayer.count : '----'}
          </div>
          <div className="current-info">
            {currentPlayer ? <button title="Delete Player" onClick={displayAlert}>X</button> : null}
          </div>
        </div>
        <center>
          {!showForm ? <button id="add" onClick={displayForm}>Add New Player</button> : null}
          {showForm ? <AddForm displayForm={displayForm} addNewPlayer={addNewPlayer} /> : null}
        </center>
      </div>

      <div className="modules player-list">
        <div className="headings">
          ALL PLAYERS
        </div>
        <div className="list-titles">
          <div className="title">PLAYERS</div>
          <div className="title">INITIALS</div>
          <div className="title">#SQs</div>
        </div>
        <div className="flip">
          <div className="players">
            {players ? players.map((player, i) => (<PlayerEntry player={player} key={i} selectPlayer={() => selectPlayer(i)} />)) : 'No players'}
          </div>
        </div>
      </div>

    </div>

  )
};

export default PlayerList;