// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaRegisteredRegularsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaRegisteredRegularsvgIcon(
  props: FaRegisteredRegularsvgIconProps
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
          "M256 48a208 208 0 110 416 208 208 0 110-416zm0 464a256 256 0 100-512 256 256 0 100 512zm-96-360v208c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h60.9l37.2 81.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8l-34.1-75c21.8-14.3 36.3-39 36.3-67 0-44.2-35.8-80-80-80h-88c-13.3 0-24 10.7-24 24zm48 88v-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64z"
        }
      ></path>
    </svg>
  );
}

export default FaRegisteredRegularsvgIcon;
/* prettier-ignore-end */
