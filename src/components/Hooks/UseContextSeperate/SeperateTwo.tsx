import { useContext } from "react"
import { TextContext } from "."

export const SeperateTwo: React.FC = () => {
  const { text } = useContext(TextContext);

  return (
    <div>{text}</div>
  )
}