// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconOffsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconOffsvgIcon(props: PfIconOffsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1024 1024"}
      aria-hidden={"true"}
      role={"img"}
      style={{
        verticalAlign: '-.125em"',

        ...(style || {}),
      }}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M584.704 416.988v336.238c0 21.065-7.68 39.351-23.113 54.711s-29.111 23.113-50.176 23.113-34.743-7.68-50.176-23.113-23.113-33.646-23.113-54.711V416.988c0-21.065 7.68-39.351 23.113-54.711s29.038-23.113 50.176-23.113 34.743 7.68 50.176 23.113 23.113 33.646 23.113 54.711zM512 1097.143c-70.656 0-136.997-13.385-199.022-40.009s-116.151-63.342-162.523-110.007-83.017-101.01-110.007-162.962S-.073 655.799-.073 585.143c0-70.656 13.531-136.997 40.521-199.022s63.634-116.151 110.007-162.523 100.498-83.017 162.523-110.007S441.344 73.07 512 73.07c70.656 0 136.997 13.531 199.022 40.521s116.151 63.707 162.523 110.007c46.299 46.299 83.017 100.498 110.007 162.523s40.521 128.366 40.521 199.022c0 70.656-13.531 136.997-40.521 199.022s-63.707 116.37-110.007 162.962c-46.299 46.665-100.498 83.31-162.523 110.007S582.656 1097.143 512 1097.143zM361.545 227.621c-46.958 20.334-88.137 48.128-123.465 83.529s-63.195 76.507-83.529 123.465c-20.334 46.958-30.501 97.134-30.501 150.455s10.167 103.643 30.501 150.967c20.334 47.323 48.128 88.503 83.529 123.465s76.507 62.683 123.465 83.017C408.503 962.853 458.679 973.02 512 973.02s103.497-10.167 150.455-30.501c46.958-20.334 88.137-47.982 123.465-83.017s63.122-76.142 83.529-123.465c20.334-47.323 30.501-97.646 30.501-150.967s-10.167-103.497-30.501-150.455c-20.334-46.958-48.128-88.137-83.529-123.465s-76.507-63.122-123.465-83.529C615.497 207.287 565.321 197.12 512 197.12s-103.497 10.167-150.455 30.501z"
        }
      ></path>
    </svg>
  );
}

export default PfIconOffsvgIcon;
/* prettier-ignore-end */
