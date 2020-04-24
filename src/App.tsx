import React from 'react';
import Routes from '@/router';

/* 国际化 */
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd'

export default function App() {
  return (<ConfigProvider locale={zhCN}> 
    <Routes />
  </ConfigProvider>);
}
