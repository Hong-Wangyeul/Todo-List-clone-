import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js"; //fontawesome
//yarn add @fortawesome/fontawesome-free 폰트 어썸 설치
import SimpleHabit from "./components/simpleHabit.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
