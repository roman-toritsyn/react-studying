import React, { useState, useCallback } from "react";


export const GetBoundingClientRect = () => {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback((node) => {
    if(node !== null) {
      setHeight(node.getBoundingClientRect().height)
    }
  }, [])

  return (
    <>
      <button onClick={() => setHeight((prev) => prev + 5)}>Height+</button>
      <button onClick={() => setHeight((prev) => prev - 5)}>Height-</button>
      <div
        style={{height: `${height}px`, backgroundColor: "red"}}
        ref={measuredRef}
      >
        My height is {height}px
      </div>
    </>
  )
}
