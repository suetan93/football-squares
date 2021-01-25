import React, {useState} from 'react';
import PlayerEntry from './PlayerEntry.jsx';
import AddForm from './AddForm.jsx';

const PlayerList = ({ players, selectPlayer, currentPlayer, addNewPlayer }) => {
  const [showForm, setForm] = useState(false);

  const displayForm = () => {
    setForm(!showForm)
  }

  return (
    <div className="list">
       CURRENT PLAYER
      <div className="current-player">
        <div>{currentPlayer ? currentPlayer.firstName : ''}</div>
        <div>{currentPlayer ? currentPlayer.initials : ''}</div>
        <div>{currentPlayer ? currentPlayer.count : ''}</div>
        <button>Delete Player</button>
      </div>
      {!showForm ? <button onClick={displayForm}>Add New Player</button> : null}
      {showForm ? <AddForm displayForm={displayForm} addNewPlayer={addNewPlayer} /> : null}
      <div className="list-titles">
        <div>NAME</div>
        <div>INITIALS</div>
        <div>#SQs</div>
      </div>
      <div className="players">
        {players ? players.map((player, i) => (<PlayerEntry player={player} key={i} selectPlayer={() => selectPlayer(i)} />)) : 'No players'}
      </div>
    </div>

  )
};

export default PlayerList;