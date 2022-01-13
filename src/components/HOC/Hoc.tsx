import { useState } from "react";

export const InfoComponent: React.FC = () => {
  return (
    <>
    <h1>Hi</h1>
    </>
  )
}

export function WithCounter(
  WrappedComponent: any
): any {
  const [count, setCount] = useState(0)

  const clickHandler = (() => setCount(prevCount => prevCount + 1))

  const ComponentWithCounter = (props: any) => {
    return <WrappedComponent {...props} onclick={clickHandler} count={count} />;
  };
  return ComponentWithCounter;
}

export const InfoComponentWithCounter = WithCounter(InfoComponent);
