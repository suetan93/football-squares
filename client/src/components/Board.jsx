import React, { useState }  from 'react';
import Square from './Squares.jsx';

const Board = ({ squares, handleClick }) => {
  const afc = new Array(10).fill('-');
  const nfc = new Array(10).fill('-');

  return (
    <div className="board">
      <div className="afc">
        {afc.map((box, i) => (<div className="numbers" key={i}></div>) )}
      </div>
      <div className="afc2">
        {afc.map((box, i) => (<div className="numbers" key={i}></div>) )}
      </div>
      <div className="nfc">
        {nfc.map((box, i) => (<div className="numbers" key={i}></div>) )}
      </div>
      <div className="nfc2">
        {nfc.map((box, i) => (<div className="numbers" key={i}></div>) )}
      </div>
      <div className="grid">
        {squares.map((square, i) => (<Square key={i} value={square} handleClick={() => handleClick(i)}/>))}
      </div>
    </div>
  )
};

export default Board;