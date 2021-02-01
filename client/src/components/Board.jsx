import React, { useState }  from 'react';
import Square from './Squares.jsx';

const Board = ({ squares, handleClick }) => {
  const afc = new Array(10).fill('-');
  const nfc = new Array(10).fill('-');
  const blank = new Array(4).fill(null);

  return (
    <div className="middle">
      <div className="padding">
        <div className="headings">
          SQUARES
        </div>
        <div className="board">
          <div className="logo-afc">
            {<img width="80" height="80" src="images/afclogo.jpg" />}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {<img height="75" src="images/chiefs-logo.jpg" />}
          </div>
          <div className="logo-nfc">
            {<img width="80" height="80" src="images/nfclogo.jpg" />}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {<img width="80" src="images/bucs-logo.jpg" />}
          </div>
          <div className="afc">
            {afc.map((box, i) => (<div className="numbers final" key={i}>{box}</div>) )}
          </div>
          <div className="afc2">
            {afc.map((box, i) => (<div className="numbers first-half" key={i}>{box}</div>) )}
          </div>
          <div className="nfc">
            {nfc.map((box, i) => (<div className="numbers final" key={i}>{box}</div>) )}
          </div>
          <div className="nfc2">
            {nfc.map((box, i) => (<div className="numbers first-half" key={i}>{box}</div>) )}
          </div>
          <div className="blank-box">
            {blank.map((box, i) => <div className="empty" key={i}></div>)}
          </div>
          <div className="grid">
            {squares.map((square, i) => (<Square key={i} index={i} value={square} handleClick={() => handleClick(i)}/>))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Board;