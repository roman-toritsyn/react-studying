import React from "react"

export const FancyButton = React.forwardRef((props: any, ref: any) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const ref = React.createRef();
<FancyButton ref={ref}>Click me</FancyButton>
