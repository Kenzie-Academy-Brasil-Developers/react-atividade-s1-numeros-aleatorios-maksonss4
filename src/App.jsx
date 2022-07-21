import './App.css';
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

  function randomNumber () {
    setNumber(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Random number: {number}</p>
        <button onClick={randomNumber}>Create new number</button>
      </header>
    </div>
  );
}

export default App;
