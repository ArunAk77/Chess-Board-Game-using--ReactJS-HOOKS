import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { useSpring, animated } from 'react-spring';
import './Chessboard.css';

const ChessboardComponent = () => {
  const [game, setGame] = useState(new Chess());

  const handleDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', 
    });

    if (move === null) return;

    setGame(new Chess(game.fen()));
  };
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="chessboard-container">
      <animated.div style={springProps}>
        <Chessboard
          position={game.fen()}
          onDrop={handleDrop}
          orientation="black"
        />
      </animated.div>
    </div>
  );
};

export default ChessboardComponent;
