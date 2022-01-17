import React from "react";

export const WordList = ({ words }) => {
  const listOfWords = words.map(word => <li key={word}>{word}</li>)

  return (
    <ul>
      {listOfWords}
    </ul>
  )
}