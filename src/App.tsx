/*
 * @Author: huangyuhui
 * @Date: 2021-01-22 11:52:14
 * @LastEditors: huangyuhui
 * @LastEditTime: 2021-01-22 12:03:13
 * @Description:
 * @FilePath: \react-hot-cli\src\App.tsx
 */
import { hot } from 'react-hot-loader/root';

import React from 'react';
import Routes from '@/router';

import { store } from '@/store';
import { StoreContext } from 'redux-react-hook';
function a() {}

/* 国际化 */
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

export default hot(function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <StoreContext.Provider value={store}>
        <Routes />
      </StoreContext.Provider>
    </ConfigProvider>
  );
});
