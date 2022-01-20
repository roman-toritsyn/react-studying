import React, { useRef, useState } from "react"

// file input can not be controlled !!!

export const UncontrolledInput = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const changeHandler = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(input)
  }

  return (
    <form action="">
      <div> inputRefValue: {`${inputRef?.current?.value}`}</div>

      <input
        type="text"
        value={input}
        name="UserName"
        onChange={changeHandler}
        ref={inputRef}
        placeholder="write your name"
        style={{marginBottom: '10px'}}
      >
      </input>

      <br />
      <input type="file" style={{marginBottom: '10px'}} />

      <br/>
      <button onClick={handleSubmit}> Submit</button>
    </form>
  )
}
