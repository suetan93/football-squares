import React from 'react';
import classNames from 'classnames';

const Square = ({ index, value, handleClick, playerSquares }) => {
  const bttnClass = classNames('square', {
    'highlight': playerSquares[index]
  })

  return (
    <button className={bttnClass} onClick={handleClick} disabled ><b>{value}</b></button>
  )
};

export default Square;