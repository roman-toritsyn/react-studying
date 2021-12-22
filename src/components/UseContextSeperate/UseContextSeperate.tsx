import { SeperateContextProvider, SeperateOne, SeperateTwo, TextSelector } from "."

export const UseContextSeperate: React.FC = () => {

  return (
    <SeperateContextProvider>
      <div>
        <h1>SeperateContext</h1>
        <TextSelector />
        <SeperateOne />
        <SeperateTwo />
      </div>
    </SeperateContextProvider>
  )
}