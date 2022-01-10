import React, { useEffect, useRef, useState } from "react"

export const Useref: React.FC = () => {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current?.focus()
  }


  return (
    <>
      <div>UseRef rendered {renderCount.current} times</div>

      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />

      <div>My name is {name}</div>

      <button onClick={focusInput}>Focus input</button>
    </>
  )
}