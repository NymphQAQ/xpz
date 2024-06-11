"use client";
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { Layout, theme, ConfigProvider } from "antd";
import NSider from "./nsider/NSider";
import NHeader from "./nheader/NHeader";
import { useAppSelector } from "@/hooks";

const { Content } = Layout;

interface Iprops {
  children?: ReactNode;
}

const Index: FC<Iprops> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const colorPrimary = useAppSelector((state) => state.theme.colorPrimary);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorPrimary,
        },
      }}
    >
      <Layout className="h-screen">
        <NSider />
        <Layout>
          <NHeader />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default memo(Index);
