// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaDSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaDSolidsvgIcon(props: FaDSolidsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 384 512"}
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
          "M0 96c0-35.3 28.7-64 64-64h96c123.7 0 224 100.3 224 224S283.7 480 160 480H64c-35.3 0-64-28.7-64-64V96zm160 0H64v320h96c88.4 0 160-71.6 160-160S248.4 96 160 96z"
        }
      ></path>
    </svg>
  );
}

export default FaDSolidsvgIcon;
/* prettier-ignore-end */