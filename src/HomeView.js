import React, { useState } from "react";
import "./HomeView.css";
import { useHistory } from "react-router-dom";

function HomeView() {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/play?square-amounts=${squareAmounts}`);
  };

  const [squareAmounts, setSquareAmounts] = useState(12);

  const isSelectedStyle = (amount) => {
    if (amount === squareAmounts) {
      return "level-box-selected";
    }
  };

  return (
    <div className="homeview-wrapper">
      <div className="homeview-container">
        <div>
          <h1>Memory</h1>
          <p>Have fun and exercise your brain</p>
          <div className="levels">
            <div
              onClick={() => setSquareAmounts(12)}
              className={`level-box ${isSelectedStyle(12)}`}
            >
              <p id="level-difficulty-text">Easy</p>
              <p>12</p>
            </div>
            <div
              onClick={() => setSquareAmounts(16)}
              className={`level-box ${isSelectedStyle(16)}`}
            >
              <p id="level-difficulty-text">Normal</p>
              <p>16</p>
            </div>
            <div
              onClick={() => setSquareAmounts(20)}
              className={`level-box ${isSelectedStyle(20)}`}
            >
              <p id="level-difficulty-text">Hard</p>
              <p>20</p>
            </div>
          </div>
          <button className="play-button" onClick={handleClick}>
            <span className="play-text">PLAY</span>
          </button>
        </div>
        <div>
          <img
            className="homeview-image"
            src="\memory-cards.png"
            alt="card-pic"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
