import React, { useContext } from "react"
import { TextContext } from "."

export const TextSelector: React.FC = () => {
  const {text, setText} = useContext(TextContext);

  return (
    <select
      name="ChoseTheWord"
      id="none"
      value={text}
      onChange={(event) => {setText(event.target.value)}}
    >
      <option value="Hello!">Hello!</option>
      <option value="Goodbye">GoodBye</option>
    </select>
  )
}