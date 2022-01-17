import React from "react";

export const ReactMemo = React.memo(
  ({ words }) => {
    console.log('rendering words list');
  
    const wordList = words.map(word => <li key={word}>{word}</li>)
    return (
      <ul>
        {wordList}
      </ul>
    );
  }
);
