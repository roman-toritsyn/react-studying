import React, { useState, useMemo } from "react"
import { ReactMemo } from "./ReactMemo"

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black']

export const ForReactMemo = () => {
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState('')

  const getVisibleColors = () => {
    console.log(`filtering with ${query}`);

    return colors.filter(color => color.includes(query));
  }

  const visibleColors = useMemo(
    getVisibleColors,
    [query]
  )

   const clickHandler = () => setCount(prevC => prevC + 1)
   const changeHandler = (event) => setQuery(event.target.value)

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>{count} ++</button>

      <ReactMemo words={visibleColors} />
    </>
  )
}
