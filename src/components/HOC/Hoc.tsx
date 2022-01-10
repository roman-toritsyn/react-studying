import React, { useState } from "react"

type Content = {
  content: string
}

export const InfoComponent: React.FC = () => {
  return <div>hi</div>
}

export function WithExtraInfo<P>(
  WrappedComponent: React.ComponentType<P & Content>
) {
  const [content, setContent] = useState('');
  setContent('important data.');

  const ComponentWithExtraInfo = (props: P) => {
    return <WrappedComponent {...props} content={content} />;
  };
  return ComponentWithExtraInfo;
}

export const InfoComponentWithExtraInfo = WithExtraInfo(InfoComponent)
