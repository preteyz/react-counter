import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

const data = {
  counters: 5
};

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);
