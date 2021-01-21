import React from 'react';

const Square = ({ value, handleClick }) => {

  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
};

export default Square;