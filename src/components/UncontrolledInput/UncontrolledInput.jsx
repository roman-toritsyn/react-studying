import React, { useRef, useState, useEffect } from "react"

export const UncontrolledInput = () => {
  const [inputData, setInputData] = useState({
    name: '',
    lastName: '',
  })

  const uncontrolledRef = useRef([])

  const addInput = el => {
    if (el && !uncontrolledRef.current.includes(el)) {
      uncontrolledRef.current.push(el)
    }
  }

  useEffect(() =>{
    console.log(uncontrolledRef);
  }, [])

  const changeInputHandler = (event) => {
    if(event.target.name === 'name') {
      setInputData({
        name: event.target.value,
        lastName: inputData.lastName,
      })
    }

    if(event.target.name === 'lastName') {
      setInputData({
        name: inputData.name,
        lastName: event.target.value,
      })
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()

    console.log(`uncontrolledInputOne: ${uncontrolledRef.current[0].value} uncontrolledInputTwo: ${uncontrolledRef.current[1].value}`);
  }

  const handleClick = (event) => {
    const { name, lastName } = inputData;
    alert(`${name} ${lastName}`)
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        value={inputData.name}
        name="name"
        onChange={changeInputHandler}
        placeholder="write your name"
        style={{marginBottom: '10px'}}
      >
      </input>

      <input
        type="text"
        value={inputData.lastName}
        name="lastName"
        onChange={changeInputHandler}
        placeholder="write your lastname"
        style={{marginBottom: '10px'}}
      >
      </input>

      <input
        type="text"
        name="uncontrolledOne"
        placeholder="uncontrolled"
        style={{marginBottom: '10px'}}
        ref={addInput}
      >
      </input>

      <input
        type="text"
        name="uncontrolledTwo"
        placeholder="uncontrolled"
        style={{marginBottom: '10px'}}
        ref={addInput}
      >
      </input>

      <br/>
      <button onClick={handleClick}> Alert controled inputs </button>
      <button type="submit">Submit</button>
    </form>
  )
}
