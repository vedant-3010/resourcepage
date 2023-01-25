import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/MainPage";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <MainPage/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
