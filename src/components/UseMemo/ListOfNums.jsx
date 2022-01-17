import React, { useState, useEffect } from "react"

export const ListOfNums = ({ getItems }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems())
    console.log('items updated');
  }, [getItems])

  return (
    items.map(item => <div key={item}>{item}</div>)
  )
}
