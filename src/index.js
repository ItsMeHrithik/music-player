import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const MusicPlayer = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<MusicPlayer />, document.getElementById("root"));
