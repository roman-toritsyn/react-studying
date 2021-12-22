import { useState } from "react"
import { FirstElement } from ".";
import { ColorContext } from ".";


export const Context: React.FC = () => {
  const [color, setColor] = useState('blue');

  const toggleColorHandler = () => {
    color === 'blue' ? setColor('black') : setColor('blue')
  }

  return (
    <ColorContext.Provider value={color}>
      <div>
        <h1>useContext</h1>
        <button
          type="button"
          onClick={toggleColorHandler}
        >
          Change color
        </button>
        <div
        style={{backgroundColor: color}}
        >
          Text
        </div>
        <FirstElement />
      </div>
    </ColorContext.Provider>
  )
}