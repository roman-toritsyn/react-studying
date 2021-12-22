import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { WelcomeDialog } from './components/Children';
import { Clock } from './components/CLock';
import { Forms } from './components/Forms';
import { List } from './components/List';
import { OnlineStatusToggler } from './components/OnlineStatusToggler';
import { SetState } from './components/SetState';
import { Context } from './components/UseContext';
import { UseContextSeperate } from './components/UseContextSeperate';

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
      <WelcomeDialog />
      <Forms />
      <SetState />
      <Context />
      <UseContextSeperate />
    </div>
  );
}

export default App;
