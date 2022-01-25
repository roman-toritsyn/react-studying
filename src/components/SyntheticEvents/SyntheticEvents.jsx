import { useEffect, useState } from "react"


export const SyntheticEvents = () => {
  const [input, setInput] = useState('')
  const [hoveredCount, setHovereCount] = useState(0)

  useEffect(() => {
    document.title = `${hoveredCount}`
  })

  return (
    <>
      <div
        style={{margin: '25px'}}
        onCopy={(e) => console.log(`${e.target} copied || nativeEvent is ${e.nativeEvent}`)}
        onMouseOver={(e) => {
          console.log(`mouse is over the div || X = ${e.clientX} Y = ${e.clientY}`)
          setHovereCount((prev) => prev + 1)
        }}
        onMouseOut={() => console.log('mouse left the div')}
        onDoubleClick={() => console.log('mouse doubleClicked the div')}
        onContextMenu={() => console.log('context menu')}
      >
        Text to copy
      </div>
      <input
        value={input}
        type="text"
        onPaste={() => console.log('text pasted')}
        onCut={() => console.log('text cut')}
        onKeyPress={(e) => console.log(`${e.key} key pressed`)}
        onFocus={() => console.log('input focused')}
        onBlur={() => console.log('input lost his focus')}
        onChange={(e) => {
          setInput(e.target.value)
          console.log('input value changed')
        }}
        onInput={() => console.log('onInput event')}
      >
      </input>
    </>
  )
}