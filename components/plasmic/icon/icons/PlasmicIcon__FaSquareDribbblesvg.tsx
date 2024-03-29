// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSquareDribbblesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSquareDribbblesvgIcon(props: FaSquareDribbblesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 448 512"}
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
          "M165.9 132.5c-38.3 18-66.8 53.3-75.7 95.7 6.1.1 62.4.3 126.4-16.7-22.7-40.2-47.1-74.1-50.7-79zm26.1-9.1c3.8 5.1 28.6 38.9 51 80 48.6-18.3 69.1-45.9 71.6-49.4-33.6-29.8-79.3-41.1-122.6-30.6zM277.4 382c-2-12-10-53.8-29.2-103.6-55.1 18.8-93.8 56.4-108.1 85.6 40.5 31.6 93.3 36.7 137.3 18zm-49.6-149.4C159.6 253 93.4 252.2 87.4 252v4.2c0 35.1 13.3 67.1 35.1 91.4 22.2-37.9 67.1-77.9 116.5-91.8-3.4-7.8-7.2-15.5-11.1-23.2zm72.5 136.9c30.7-20.7 52.5-53.6 58.6-91.6-4.6-1.5-42.3-12.7-85.1-5.8 17.9 49.1 25.1 89.1 26.5 97.4zm-34.8-119c45.5-5.7 90.7 3.4 95.2 4.4-.3-32.3-11.8-61.9-30.9-85.1-2.9 3.9-25.8 33.2-76.3 53.9 4.8 9.8 8.3 17.8 12 26.8zM384 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM224 416a160 160 0 110-320 160 160 0 110 320z"
        }
      ></path>
    </svg>
  );
}

export default FaSquareDribbblesvgIcon;
/* prettier-ignore-end */
