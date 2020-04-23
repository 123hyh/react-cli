import React from "react";
interface HomeProps {
  /* 数量 */
  count: number;
  /* 点击事件 */
  handlerClick: () => void;
}
export default function Home(props: HomeProps) {
  return <div onClick={() => props.handlerClick()}>Home{props.count}</div>;
}
