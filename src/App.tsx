import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Clock } from './components/CLock';
import { List } from './components/List';
import { OnlineStatusToggler } from './components/OnlineStatusToggler';
import { TextArea } from './components/TextArea';

function App() {
  const [online, setOnline] = useState(true);

  const changeHandler = () => {
    setOnline(!online);
  }

  const toggler = (online: boolean) => setOnline(!online);

  return (
    <div className="App">
      <header className="App-header">
        {online ? 'Online' : 'Offline'}
      </header>
      <button
        onClick={changeHandler}
      >
        Online toggler
      </button>
      <OnlineStatusToggler toggler={toggler} online={online} />
      {online && <Clock />}
      <Card />
      <List />
      <TextArea />
    </div>
  );
}

export default App;
