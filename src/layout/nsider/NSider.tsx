"use client";
import React, { useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, Layout } from "antd";
import { menuList } from "@/config/menu";
import { useAppSelector } from "@/hooks";
const { Sider } = Layout;
interface Iprops {
  children?: ReactNode;
}

const NSider: FC<Iprops> = () => {
  const nav = useRouter();
  const pathname = usePathname();
  const collapsed = useAppSelector((state) => state.collapsed);
  const [current, setCurrent] = useState(["/"]);
  useEffect(() => {
    if (pathname) {
      setCurrent([pathname]);
    }
  }, [pathname]);
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      breakpoint="xs"
    >
      <div className="flex justify-center items-center h-16">LOGO</div>

      <Menu
        theme="light"
        mode="inline"
        selectedKeys={current}
        onClick={({ key }) => {
          nav.push(key);
        }}
        items={menuList()}
      />
    </Sider>
  );
};

export default NSider;
