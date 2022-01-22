import React from "react";
import "./HomeView.css";
import { useHistory } from "react-router-dom";

function HomeView() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/play");
  };

  return (
    <div className="background">
      <div className="flex">
        <div>
          <h1>Memory </h1>
          <p>Have fun and exercise your brain</p>
          <button className="play-button" onClick={handleClick}>
            <span className="play-text">PLAY</span>
          </button>
          <div className="levels">
            <div className="level-box">3x4</div>
            <div className="level-box">4x4</div>
            <div className="level-box">5x4</div>
          </div>
        </div>
        <div>
          <img className="image" src="\memory-cards.png" alt="card-pic"></img>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
