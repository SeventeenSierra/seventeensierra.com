// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaDollarSignSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaDollarSignSolidsvgIcon(props: FaDollarSignSolidsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 320 512"}
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
          "M160 0c17.7 0 32 14.3 32 32v35.7c1.6.2 3.1.4 4.7.7.4.1.7.1 1.1.2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4 1.8 3.9 5.5 8.3 12.8 13.2 16.3 10.7 41.3 17.7 73.7 26.3l2.9.8c28.6 7.6 63.6 16.8 89.6 33.8 14.2 9.3 27.6 21.9 35.9 39.5 8.5 17.9 10.3 37.9 6.4 59.2-6.9 38-33.1 63.4-65.6 76.7-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.9c-.4-.1-.9-.1-1.3-.2h-.2c-24.4-3.8-64.5-14.3-91.5-26.3-16.1-7.2-23.4-26.1-16.2-42.2S44.9 353 61 360.2c20.9 9.3 55.3 18.5 75.2 21.6 31.9 4.7 58.2 2 76-5.3 16.9-6.9 24.6-16.9 26.8-28.9 1.9-10.6.4-16.7-1.3-20.4-1.9-4-5.6-8.4-13-13.3-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7c-28.5-7.6-63.5-16.9-89.5-33.9-14.2-9.3-27.5-22-35.8-39.6-8.4-17.9-10.1-37.9-6.1-59.2 7.2-38.2 35.8-63 68.3-75.9 13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
        }
      ></path>
    </svg>
  );
}

export default FaDollarSignSolidsvgIcon;
/* prettier-ignore-end */
