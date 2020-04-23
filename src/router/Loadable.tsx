import React from 'react';
import Loadable from '@loadable/component';

function Loding() {
  return <div>加载中···</div>;
}

export default function Loadables(component: () => any) {
  return Loadable(component, {
    fallback: <Loding />,
  });
}
