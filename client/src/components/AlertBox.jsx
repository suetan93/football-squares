import React from 'react'

const AlertBox = ({ displayAlert, deletePlayer }) => {

  return (
    <div className="alert">
      <div className="message">
        <h4>Are you sure you want to remove player?</h4>
        <p>All player data and squares will be removed.</p>
        <div align="right">
          <button onClick={deletePlayer}>YES</button> <button onClick={displayAlert}>CANCEL</button>
        </div>
      </div>
    </div>

  )
}

export default AlertBox;