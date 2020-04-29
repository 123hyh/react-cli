import React from 'react';
import NavBar from '@/components/Home/Nav';
import Main from '@/components/Home/Main';
import Sidebar from '@/components/Home/Sidebar';
import $style from '@/view/Home/home.module.scss';
/**
 * 主页页面
 * @return {JSX}
 */
export default function Home() {
  return (
    <div className={$style.home}>
      <NavBar className={$style.nav} />
      <Sidebar className={$style.sidebar} />
      <Main className={$style.main} />
    </div>
  );
}
