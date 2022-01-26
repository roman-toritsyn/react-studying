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
import { Context } from './components/Hooks/UseContext'
import { UseContextSeperate } from './components/Hooks/UseContextSeperate'
import { UseMemo } from './components/Hooks/UseMemo'
import { ForReactMemo } from './components/ReactMemo'
import { DebounceWithUseCallback } from './components/DebounceWithUseCallback'
import { RenderProps } from './components/RenderProps'
import { UncontrolledInput } from './components/UncontrolledInput'
import { PropTypesComponent } from './components/PropTypes'
import { SyntheticEvents } from './components/SyntheticEvents'
import { SetState } from './components/Hooks/UseState'
import { AxiosUsage } from './components/AxiosUsage'

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
      {/* <UncontrolledInput /> */}
      {/* <PropTypesComponent message={'Hello it\'s PropTypes xD'} /> */}
      {/* <SyntheticEvents /> */}
      {/* <SetState /> */}
      <AxiosUsage />
    </div>
  );
}

export default App;
