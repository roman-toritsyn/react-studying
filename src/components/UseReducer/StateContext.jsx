import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        count: state.count + 1,
      }

    case 'decrease':
      return {
        ...state,
        count: state.count - 1,
      }
  
    default:
      return state
  }
}

const initialState = { count: 0 }

export const DispatchContext = React.createContext(() => {})
export const StateContext = React.createContext(initialState)


export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}
