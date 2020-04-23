import React from 'react';
import { useHistory } from 'react-router';
import NavBar from '@/components/Home/Nav';
import Main from '@/components/Home/Main';
import Sidebar from '@/components/Home/Sidebar';
import $style from '@/styles/home.module.scss';

export default function Home() {
  const history = useHistory();
  const handlerLogout = () => {
    history.push({ pathname: '/login' });
  };
  return (
    <div className={$style.home}>
      <NavBar className={$style.nav} handlerLogout={handlerLogout} />
      <Sidebar className={$style.sidebar} />
      <Main className={$style.main} />
    </div>
  );
}
