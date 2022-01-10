import React, { useState } from "react"

type ExtraInfo = {
  extraInfo: string
}

export const InfoComponent = () => {
  return <div></div>
}

export function WithExtraInfo<P>(
  WrappedComponent: React.ComponentType<P & ExtraInfo>
) {
  const [extraInfo, setExtraInfo] = useState('');
  setExtraInfo('important data.');

  const ComponentWithExtraInfo = (props: P) => {
    return <WrappedComponent {...props} extraInfo={extraInfo} />;
  };
  return ComponentWithExtraInfo;
}

export const InfoComponentWithExtraInfo = WithExtraInfo(InfoComponent)
