import React from 'react';

const Scores = () => {


  return (
    <div className="scores">
      <div className="modules">
        <div className="headings">
          HOW TO PLAY:
        </div>
        <div className="instructions">
          <ul>
            <li>Click "Add New Player" to add your name</li>
            <li>Select any available square(s) on the board you want to claim</li>
            <li>Squares can be toggled to add or remove your initials</li>
          </ul>
          <p>The winner is determined by looking at the last number in each team's score, and then matching those numbers on the grid and seeing which square intersects those two numbers. There will be a winner for the first half score and one for the final game score.</p>
          <p style={{color: "#743c74", fontSize: "14px", fontWeight: "bold", fontStyle: "italic"}}>*BOARD WILL BE LOCKED WHEN ALL SQUARES ARE FILLED*</p>
        </div>
      </div>

      <div className="modules payout">
        <div className="headings">
          PAYOUT
        </div>
        <div className="prize">
          <center>
            <h1>$5</h1>
            <p>BUY-IN PER SQUARE</p>
            <br />
            <div className="prize-amount">
              <div className="prize-square1" />
              <h3>1ST HALF PRIZE = $200</h3>
              <div className="prize-square2" />
              <h3>2ND HALF PRIZE = $300</h3>
            </div>
          </center>
        </div>
      </div>
      <div className="modules winners">
        <div className="headings">
          WINNERS
        </div>
        <br />
        <div className="innerbox">
          <div className="innerbox1" align="right">
            <b>1ST HALF: </b>
          </div>
          <div className="winner1">
            LILLIAN (LN)
          </div>
          <div className="innerbox2" align="right">
            <b>FINAL SCORE:</b>
          </div>
          <div className="winner2">
            LILLIAN (LN)
          </div>
        </div>
      </div>
    </div>

  )
};

export default Scores;