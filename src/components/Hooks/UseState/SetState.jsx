import { useState } from "react"

let clickCount = 0;

export const SetState = () => {
  const [stateOne, setStateOne] = useState(0);
  const [stateTwo, setStateTwo] = useState(0);
  const [stateThree, setStateThree] = useState(0);
  const [stateFour, setStateFour] = useState(0);



  const setAllStates = () => {
    setStateOne((prevState) => (prevState + 1));

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
    // eslint-disable-next-line
    clickCount++;
    setAllStates();
    console.log('stateOne', stateOne, 'clickNumber', clickCount);
    console.log('stateTwo', stateTwo, 'clickNumber', clickCount);
    console.log('stateThree', stateThree, 'clickNumber', clickCount);
    console.log('stateFour', stateFour, 'clickNumber', clickCount);
    alert('You have clicked');
  }

  console.log('afterclick and setStates', 'stateOne', stateOne);
  

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