import React, { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { WelcomeDialog } from './components/Children'
import { Clock } from './components/CLock'
import { ErrorBoundary, ErrorMessenger } from './components/ErrorBoundary'
import { Forms } from './components/Forms'
import { InfoComponentWithCounter } from './components/HOC'
import { List } from './components/List'
import { OnlineStatusToggler } from './components/OnlineStatusToggler'
import { ModalContainer } from './components/Portals/Portal'
import { Useref } from './components/RefForwarding'
import { SetState } from './components/SetState'
import { Context } from './components/UseContext'
import { UseContextSeperate } from './components/UseContextSeperate'
import { UseMemo } from './components/UseMemo'
import { ForReactMemo } from './components/ReactMemo'
import { DebounceWithUseCallback } from './components/DebounceWithUseCallback'
import { RenderProps } from './components/RenderProps'
import { UncontrolledInput } from './components/UncontrolledInput'

function App() {
  const [online, setOnline] = useState(true);

  const changeHandler = () => {
    setOnline(!online);
  }

  const toggler = (online: boolean) => setOnline(!online);

  return (
    <div className="App">
      {/* <header className="App-header">
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
      <ErrorBoundary>
        <ErrorMessenger />
      </ErrorBoundary>
      <Useref /> */}
      {/* <InfoComponentWithCounter /> */}
      {/* <ModalContainer /> */}
      {/* <UseMemo />
      <ForReactMemo /> */}
      {/* <DebounceWithUseCallback /> */}
      {/* <RenderProps /> */}
      <UncontrolledInput />
    </div>
  );
}

export default App;
