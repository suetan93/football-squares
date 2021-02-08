import React from 'react';
import classNames from 'classnames';

const Square = ({ winner, index, value, handleClick, playerSquares }) => {
  const bttnClass = classNames('square', {
    'highlight': playerSquares[index],
    'fWinner': winner.winner1 === index,
    'secondWinner': winner.winner2 === index

  })

  return (
    <button className={bttnClass} onClick={handleClick} disabled ><b>{value}</b></button>
  )
};

export default Square;