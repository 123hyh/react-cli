import React from 'react';
import Loadable from '@loadable/component';
/**
 * loading 组件
 * @return {JSX}
 */
function Loding() {
  return <div>加载中···</div>;
}
/**
 * 路由懒加载组件
 * @param {function} component
 * @return {JSX}
 */
export default function Loadables(component: () => any) {
  // eslint-disable-next-line new-cap
  return Loadable(component, {
    fallback: <Loding />,
  });
}
