import React, { useState, useMemo, useCallback } from "react";
import { WordList } from "./WordList";

const initialColors = ['red', 'blue', 'black', 'green', 'white', 'yellow', 'orange']

const debounce = (f, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(f, delay, ...args)
  }
}

export const DebounceWithUseCallback = ({ colors = initialColors }) => {
  const [query, setQuery] = useState('')
  const [appliedQuery, setAppliedQuery] = useState('')

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 1000),
    []
  )

  const changeHandler = (event) => {
    setQuery(event.target.value)
    applyQuery(event.target.value)
  }

  const visibleColors = useMemo(() => {
    console.log('filtering', appliedQuery);

    return colors.filter(color => color.includes(appliedQuery))
  }, [colors, query])

  return (
    <>
      <input type="text" value={query} onChange={changeHandler} />

      <WordList words={visibleColors} />
    </>
  )
}