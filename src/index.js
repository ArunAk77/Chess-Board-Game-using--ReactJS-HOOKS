import React from "react";
import ReactDOM from 'react-dom';
import ChessboardComponent from "./Chessboard";

function Final() {
  return (
    <div className="App">
      <h1>Chess Game</h1>
      <ChessboardComponent />
    </div>
  );
}
ReactDOM.render(<Final/>,document.getElementById('root'));


