import React from 'react';
import NavBar from '@/components/Home/Nav';
import Main from '@/components/Home/Main';
import Sidebar from '@/components/Home/Sidebar';
interface HomeProps {
  /* 数量 */
  count: number;
  /* 点击事件 */
  handlerClick: () => void;
}
import $style from '@/styles/home.module.scss';

export default function Home() {
  return (
    <div className={$style.home}>
      <NavBar className={$style.nav} />
      <Sidebar className={$style.sidebar} />
      <Main className={$style.main} />
    </div>
  );
}
