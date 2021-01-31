import React from 'react';

const Square = ({ index, value, handleClick }) => {
  console.log(value)
  return (
    <button id={`A${index}`} className="square" onClick={handleClick} ><b>{value}</b></button>
  )
};

export default Square;