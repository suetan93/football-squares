import React from 'react';

const Square = ({ value, handleClick }) => {

  return (
    <button className="square" onClick={handleClick}><b>{value}</b></button>
  )
};

export default Square;