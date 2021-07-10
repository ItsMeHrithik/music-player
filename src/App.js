import React from "react";
import "./styles/app.scss";
import Song from "./components/Songs";
import Player from "./components/Player";

const App = () => {
  return (
    <div className="App">
        <h1>Music Player</h1>
      <Song />
      <Player />
    </div>
  );
};

export default App;
