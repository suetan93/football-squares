import React, { useState }  from 'react';
import Square from './Squares.jsx';

const Board = ({ squares, handleClick, playerSquares }) => {
  const afc = [9, 7, 1, 6, 2, 5, 8, 4, 3, 0];
  const afc2 = [3, 0, 9, 2, 5, 8, 6, 1, 4, 7];
  const nfc = [4, 1, 5, 9, 3, 7, 2, 8, 0, 6];
  const nfc2 = [7, 4, 8, 9, 1, 6, 3, 2, 0, 5];
  const blank = [3, 8, 1, 0, 4, 6, 7, 9, 2, 5]

  return (
    <div className="middle">
      <div className="padding">
        <div className="headings">
          SQUARES
        </div>
        <div className="board">
          <div className="logo-afc">
            {<img width="80" height="80" src="images/afclogo.jpg" alt="AFC Logo"/>}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {<img height="75" src="images/chiefs-logo.jpg" alt="Chiefs Logo" />}
          </div>
          <div className="logo-nfc">
            {<img width="80" height="80" src="images/nfclogo.jpg" alt="NFC Logo" />}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {<img width="80" src="images/bucs-logo.jpg" alt="Bucs Logo" />}
          </div>
          <div className="afc">
            {afc.map((box, i) => (<div className="numbers final" key={i}>{box}</div>) )}
          </div>
          <div className="afc2">
            {afc2.map((box, i) => (<div className="numbers first-half" key={i}>{box}</div>) )}
          </div>
          <div className="nfc">
            {nfc.map((box, i) => (<div className="numbers final" key={i}>{box}</div>) )}
          </div>
          <div className="nfc2">
            {nfc2.map((box, i) => (<div className="numbers first-half" key={i}>{box}</div>) )}
          </div>
          <div className="blank-box">
            {blank.map((box, i) => <div className="empty" key={i}></div>)}
          </div>
          <div className="grid">
            {squares.map((square, i) => (<Square key={i} index={i} value={square} playerSquares={playerSquares} handleClick={() => handleClick(i)}/>))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Board;