import React, { useEffect, useRef, useState } from "react"
// import { SomeInput } from "."

export const Useref: React.FC = () => {
  const [name, setName] = useState('')
  // const [someInputValue, setSomeInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const renderCount = useRef(1)
  // const someInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current?.focus()
  }


  return (
    <>
      {/* <SomeInput
        ref={someInputRef}
        type="text"
        value={someInputValue}
        onChange={(e: any) => setSomeInputValue(e.target.value)}
      /> */}

      <div>UseRef rendered {renderCount.current} times</div>

      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />

      <div>My name is {name}</div>

      <button onClick={focusInput}>Focus input</button>
    </>
  )
}