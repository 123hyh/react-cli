import React from 'react';
import { useHistory } from 'react-router';
import NavBar from '@/components/Home/Nav';
import Main from '@/components/Home/Main';
import Sidebar from '@/components/Home/Sidebar';
import $style from '@/view/Home/home.module.scss';
import { useMappedState } from 'redux-react-hook';
import { StoresType } from '@/store';

export default function Home() {
  const store: StoresType = useMappedState((store) => store);
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
