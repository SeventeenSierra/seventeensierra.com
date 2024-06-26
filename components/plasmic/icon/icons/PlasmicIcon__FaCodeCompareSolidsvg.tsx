// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaCodeCompareSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaCodeCompareSolidsvgIcon(
  props: FaCodeCompareSolidsvgIconProps
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
          "M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1S320 334.5 320 344v40h16c35.3 0 64-28.7 64-64V153.3c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128h-16v40zM456 80a24 24 0 10-48 0 24 24 0 1048 0zM192 24c0-9.5 5.6-18.1 14.2-21.9S225-.2 232 6.2l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1S192 177.5 192 168v-40h-16c-35.3 0-64 28.7-64 64v166.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1048 0 24 24 0 10-48 0z"
        }
      ></path>
    </svg>
  );
}

export default FaCodeCompareSolidsvgIcon;
/* prettier-ignore-end */
