"use client"
const initState = {
  collapsed: false, // 菜单收起
  theme: {
    colorPrimary: "#1677ff",
  },
};
if(typeof window !== "undefined") {
  initState.theme.colorPrimary = localStorage.getItem("themeConfig") || "#1677ff"
}
export default initState;
