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
        </div>
        <div>
          <img className="image" src="\memory-cards.png" alt="card-pic"></img>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
