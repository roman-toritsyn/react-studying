import React, { useMemo, useState } from "react"

// Creating context
export const TextContext = React.createContext({
  text: 'Hello!',
  setText: (value: string) => {},
});

// Creating Seperate ContextProviderWrapper
export const SeperateContextProvider = ({ children }: any) => {
  const [text, setText] = useState('Text');

  // Caching the contextValue object to prevent rerendering
  const contextValue = useMemo(() => {
    return {
      text,
      setText,
    }
  }, [text])

  return (
    <TextContext.Provider value={contextValue} >
      {children}
    </TextContext.Provider>
  )
}