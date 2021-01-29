import React from 'react';

const Square = ({ index, value, handleClick }) => {

  return (
    <button id={`A${index}`} className="square" onClick={handleClick}><b>{value}</b></button>
  )
};

export default Square;