import React, { useContext } from "react";
import { DispatchContext, StateContext } from './StateContext'

export const Counter = () => {
  const dispatch = useContext(DispatchContext)
  const { count } = useContext(StateContext)

  const increase = () => dispatch({ type: 'increase' })
  const decrease = () => dispatch({ type: 'decrease' })
  
  return(
    <>
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
    </>
  )
}