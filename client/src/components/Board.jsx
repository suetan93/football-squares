import React, { useState }  from 'react';
import Square from './Squares.jsx';

const Board = ({ squares, handleClick }) => {


  return (
    <div className="grid">
      {squares.map((square, i) => (<Square key={i} value={square} handleClick={() => handleClick(i)}/>))}
    </div>
  )
};

export default Board;