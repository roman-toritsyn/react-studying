import { useContext } from "react"
import { ColorContext } from "."

export const SecondElement: React.FC = () => {
  const color = useContext(ColorContext);

  return (
    <div style={{backgroundColor: color}}>Text2</div>
  )
}