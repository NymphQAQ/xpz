"use client";
import React, { ReactNode, FC } from "react";
import { Provider } from "react-redux";
import { store } from "@/store"; // 导入您的Redux存储
import Layout from "./Layout";

interface Iprops {
  children?: ReactNode;
}

const App: FC<Iprops> = ({ children }) => {
  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  );
};

export default App;
