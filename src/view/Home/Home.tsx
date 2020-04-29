import React from 'react';
import {useHistory} from 'react-router';
import NavBar from '@/components/Home/Nav';
import Main from '@/components/Home/Main';
import Sidebar from '@/components/Home/Sidebar';
import $style from '@/view/Home/home.module.scss';

export default function Home() {
  const history = useHistory();

  return (
    <div className={$style.home}>
      <NavBar className={$style.nav} />
      <Sidebar className={$style.sidebar} />
      <Main className={$style.main} />
    </div>
  );
}
