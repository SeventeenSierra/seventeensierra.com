// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSackDollarSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSackDollarSolidsvgIcon(props: FaSackDollarSolidsvgIconProps) {
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
          "M320 96H192l-47.4-71.1c-7.1-10.7.5-24.9 13.3-24.9h196.2c12.8 0 20.4 14.2 13.3 24.9L320 96zm-128 32h128c3.8 2.5 8.1 5.3 13 8.4 56.7 36.3 179 114.5 179 279.6 0 53-43 96-96 96H96c-53 0-96-43-96-96 0-165.1 122.3-243.3 179-279.6 4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5-13.9 8.3-25.9 22.8-25.8 43.9.1 20.3 12 33.1 24.7 40.7 11 6.6 24.7 10.8 35.6 14l1.7.5c12.6 3.8 21.8 6.8 28 10.7 5.1 3.2 5.8 5.4 5.9 8.2.1 5-1.8 8-5.9 10.5-5 3.1-12.9 5-21.4 4.7-11.1-.4-21.5-3.9-35.1-8.5-2.3-.8-4.7-1.6-7.2-2.4-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9.6 4 1.3 6.1 2.1 8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20v-13.8c8-1.7 16-4.5 23.2-9 14.3-8.9 25.1-24.1 24.8-45-.3-20.3-11.7-33.4-24.6-41.6-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5-5.2-3.1-5.3-4.9-5.3-6.7 0-3.7 1.4-6.5 6.2-9.3 5.4-3.2 13.6-5.1 21.5-5 9.6.1 20.2 2.2 31.2 5.2 10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"
        }
      ></path>
    </svg>
  );
}

export default FaSackDollarSolidsvgIcon;
/* prettier-ignore-end */
