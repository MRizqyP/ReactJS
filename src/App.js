import React from "react";
import "./App.css";
import createPersistedState from "@plq/use-persisted-state";

const [UsePersistedState] = createPersistedState(
  "example",
  window.sessionStorage
);

function App() {
  const [count, setCount] = UsePersistedState("count", 0);
  const increment = () => setCount(prevCount => prevCount + 1);
  return (
    <div className="App">
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
