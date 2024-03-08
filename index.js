import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
function Display(){
  return(
    <div>
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Display />, rootElement);