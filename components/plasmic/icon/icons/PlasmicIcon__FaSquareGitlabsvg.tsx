// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSquareGitlabsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSquareGitlabsvgIcon(props: FaSquareGitlabsvgIconProps) {
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
          "M0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm337.5 12.5l44.6 116.4.4 1.2c5.6 16.8 7.2 35.2 2.3 52.5-5 17.2-15.4 32.4-29.8 43.3l-.2.1-68.4 51.2-54.1 40.9c-.5.2-1.1.5-1.7.8-2 1-4.4 2-6.7 2-3 0-6.8-1.8-8.3-2.8l-54.2-40.9-67.9-50.9-.4-.3-.2-.1c-14.3-10.8-24.8-26-29.7-43.3s-4.2-35.7 2.2-52.5l.5-1.2 44.7-116.4c.9-2.3 2.5-4.3 4.5-5.6 1.6-1 3.4-1.6 5.2-1.8 1.3-.7 2.1-.4 3.4.1.6.2 1.2.5 2 .7 1 .4 1.6.9 2.4 1.5.6.4 1.2 1 2.1 1.5 1.2 1.4 2.2 3 2.7 4.8l29.2 92.2H285l30.2-92.2c.5-1.8 1.4-3.4 2.6-4.8s2.8-2.4 4.5-3.1c1.7-.6 3.6-.9 5.4-.7s3.6.8 5.2 1.8c2 1.3 3.7 3.3 4.6 5.6z"
        }
      ></path>
    </svg>
  );
}

export default FaSquareGitlabsvgIcon;
/* prettier-ignore-end */
