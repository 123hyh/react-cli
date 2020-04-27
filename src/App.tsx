import { hot } from "react-hot-loader/root";

import React from "react";
import Routes from "@/router";

import { store } from "@/store";
import { StoreContext } from "redux-react-hook";

/* 国际化 */
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

export default hot(function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <StoreContext.Provider value={store}>
        <Routes />
      </StoreContext.Provider>
    </ConfigProvider>
  );
});
