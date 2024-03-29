// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaPuzzlePieceSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaPuzzlePieceSolidsvgIcon(
  props: FaPuzzlePieceSolidsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M192 104.8c0-9.2-5.8-17.3-13.2-22.8-11.6-8.7-18.8-20.7-18.8-34 0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34-7.4 5.5-13.2 13.6-13.2 22.8 0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2 9.2 0 17.3-5.8 22.8-13.2 8.7-11.6 20.7-18.8 34-18.8 26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8-5.5-7.4-13.6-13.2-22.8-13.2-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48h-56.8c-12.8 0-23.2-10.4-23.2-23.2 0-9.2 5.8-17.3 13.2-22.8 11.6-8.7 18.8-20.7 18.8-34 0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34 7.4 5.5 13.2 13.6 13.2 22.8 0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2 8.7 11.6 20.7 18.8 34 18.8 26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8-5.5 7.4-13.6 13.2-22.8 13.2C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48h120.8c12.8 0 23.2-10.4 23.2-23.2z"
        }
      ></path>
    </svg>
  );
}

export default FaPuzzlePieceSolidsvgIcon;
/* prettier-ignore-end */
