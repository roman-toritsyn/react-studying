import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Clock } from './components/CLock';

function App() {
  const [online, setOnline] = useState(true);

  const changeHandler = () => {
    setOnline(!online);
  }

  return (
    <div className="App">
      <header className="App-header">
        {online.toString()}
      </header>
      <button
        onClick={changeHandler}
      >
        Online toggler
      </button>
      <Clock />
      <Card />
    </div>
  );
}

export default App;
