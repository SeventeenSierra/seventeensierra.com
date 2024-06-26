// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaBoltLightningSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaBoltLightningSolidsvgIcon(
  props: FaBoltLightningSolidsvgIconProps
) {
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
          "M0 256L28.5 28c2-16 15.6-28 31.8-28h168.6c15 0 27.1 12.1 27.1 27.1 0 3.2-.6 6.5-1.7 9.5L208 160h139.3c20.2 0 36.7 16.4 36.7 36.7 0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5 0-2.3.3-4.6.9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"
        }
      ></path>
    </svg>
  );
}

export default FaBoltLightningSolidsvgIcon;
/* prettier-ignore-end */
