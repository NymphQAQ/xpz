import React, { memo, useState, forwardRef, useImperativeHandle } from "react";
import type { FC, ReactNode } from "react";
import { Button, Drawer, ColorPicker, theme } from "antd";
import { generate, green, presetPalettes, red } from "@ant-design/colors";
import type { ColorPickerProps } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks";
import type { Color } from "antd/es/color-picker";
import { setColorPrimary } from "@/store/reducers";

type Presets = Required<ColorPickerProps>["presets"][number];

interface Iprops {
  children?: ReactNode;
}
const genPresets = (presets = presetPalettes) =>
  Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
  }));
const Index: React.ForwardRefRenderFunction<unknown, Iprops> = (props, ref) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const colorPrimary = useAppSelector((state) => state.theme.colorPrimary);
  const onClose = () => {
    setOpen(false);
  };
  const show = () => {
    setOpen(true);
  };
  useImperativeHandle(ref, () => ({
    show,
  }));

  const { token } = theme.useToken();
  const presets = genPresets({
    primary: generate(token.colorPrimary),
    red,
    green,
  });

  const setColor = (color: Color) => {
    dispatch(setColorPrimary(color.toHexString()));
  };

  return (
    <Drawer title="系统配置" onClose={onClose} open={open}>
      <div className="flex justify-between">
        <span>主题色</span>
        <span>
          <ColorPicker
            presets={presets}
            defaultValue={colorPrimary}
            onChangeComplete={setColor}
          />
        </span>
      </div>
    </Drawer>
  );
};

export default forwardRef(Index);
