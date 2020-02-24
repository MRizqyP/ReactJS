import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Counters from "../src/components/Counters";
import SearchForm from "../src/components/Searchform";
import Repos from "../src/components/Repos";

function App() {
  return (
    <div className="App">
      <h1>Search GitHub Repos</h1>
      <SearchForm />
      <Counters />
      <Repos />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
