import React, { useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { Button, Layout, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ConfigDrawer from "./ConfigModal/ConfigDrawer";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCollapsed } from "@/store/reducers";

const { Header } = Layout;
interface Iprops {
  children?: ReactNode;
}

const NHeader: FC<Iprops> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const configRef = useRef(null);
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.collapsed);

  const showConfigDrawer = () => {
    (configRef.current as any)?.show();
  };

  const setCollapsedFn = () => {
    dispatch(setCollapsed());
  };
  return (
    <Header
      className="flex justify-between"
      style={{ padding: 0, background: colorBgContainer }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={setCollapsedFn}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Button
        type="text"
        icon={<SettingOutlined />}
        onClick={showConfigDrawer}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <ConfigDrawer ref={configRef} />
    </Header>
  );
};

export default NHeader;
