"use client";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
export const menuList = (): MenuItem[] => {
  return [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: "主页",
    },
    {
      key: "/user",
      icon: <UserOutlined />,
      label: "用户",
    },
    // {
    //     key: '3',
    //     icon: <UploadOutlined />,
    //     label: 'nav 3',
    // },
  ];
};
