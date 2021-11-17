import "./App.css";
import React from "react";
import PlayView from "./PlayView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./HomeView";

function App() {
  return (
    <Router>
      {/* <div className="body-background"> */}
      {/* <header >
          <h1>Memory </h1>
          <p>Have fun and exercise your brain</p>
          <button className="play-button"><span className="play-text">PLAY</span></button>  
        </header>
        <div>
          <img className="image" src="\memory-cards.png"></img>
        </div> */}

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/play" component={PlayView} />
      </Switch>

      {/* </div> */}
    </Router>
  );
}

export default App;
