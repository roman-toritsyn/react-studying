import React from "react"

export const Button = () => {

  return (
    <button>Click</button>
  )
}

export const newButtonWithOnClick = (Component: React.FC<any>) => {
  const clickHandler = () => {
    console.log('Clicked');
  }

  return (
    <Component onClick={clickHandler} />
  )
}

export const ButtonWithClick = newButtonWithOnClick(Button);
