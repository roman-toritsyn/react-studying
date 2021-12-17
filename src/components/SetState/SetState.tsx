import { useState } from "react"

export const SetState: React.FC = () => {
  const [stateOne, setStateOne] = useState(0);
  const [stateTwo, setStateTwo] = useState(0);
  const [stateThree, setStateThree] = useState(0);
  const [stateFour, setStateFour] = useState(0);

  // setStateOne(2);
  // console.log(stateOne);
  
  const setAllStates = () => {
    setStateOne((prevState) => (prevState + 1));
    console.log(stateOne);

    setStateOne((prevState) => (prevState + 1));
    console.log(stateOne);
    
    setStateTwo(2);
    console.log(stateTwo);
    
    setStateThree(3);
    console.log(stateThree);
    

    setStateFour(4);
    console.log(stateFour);
  }

  const handleClick = () => {
    console.log(stateOne);
    
    setAllStates();
    console.log(stateOne);
    
  }

  return (
    <>
      <div>{stateOne}</div>
      <div>{stateTwo}</div>
      <div>{stateThree}</div>
      <div>{stateFour}</div>
      <button onClick={handleClick}>click</button>
    </>
  )
}