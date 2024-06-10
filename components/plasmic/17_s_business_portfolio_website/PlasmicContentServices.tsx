// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nnAfd7uGSka2TBy9ktGmJn
// Component: OIMrDHHq7BiN

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Service from "../../Service"; // plasmic-import: D7aINRwH4bAp/component

import { ModeValue, useMode } from "../core/PlasmicGlobalVariant__Mode"; // plasmic-import: yBTVTgAz2Co9/globalVariant
import { useScreenVariants as useScreenVariantsohEUf6Jd0EV8 } from "../core/PlasmicGlobalVariant__Screen"; // plasmic-import: OhEUf6Jd0eV8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_core_css from "../core/plasmic.module.css"; // plasmic-import: 3BHMWCYAenCmWb8ThbnzeF/projectcss
import plasmic_semantic_css from "../semantic/plasmic.module.css"; // plasmic-import: dNqcW7FYVqnkjtbdVGjyS8/projectcss
import plasmic_icon_css from "../icon/plasmic.module.css"; // plasmic-import: nVTL6BvP7Knk1RSNkBbJCm/projectcss
import plasmic_typography_css from "../typography/plasmic.module.css"; // plasmic-import: rs6Egi3bpxgrd3P2FjjZpt/projectcss
import plasmic_button_css from "../button/plasmic.module.css"; // plasmic-import: 4JFyEcvXaxQ6TZ3SJQYzp6/projectcss
import plasmic_menu_item_css from "../menu_item/plasmic.module.css"; // plasmic-import: 2ejMdvJDoJWjwd6DCNSCHJ/projectcss
import plasmic_input_css from "../input/plasmic.module.css"; // plasmic-import: teUZ7d8BEHskoXuvEf1pBj/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: nnAfd7uGSka2TBy9ktGmJn/projectcss
import sty from "./PlasmicContentServices.module.css"; // plasmic-import: OIMrDHHq7BiN/css

createPlasmicElementProxy;

export type PlasmicContentServices__VariantMembers = {};
export type PlasmicContentServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicContentServices__VariantsArgs;
export const PlasmicContentServices__VariantProps =
  new Array<VariantPropType>();

export type PlasmicContentServices__ArgsType = {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  children2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicContentServices__ArgsType;
export const PlasmicContentServices__ArgProps = new Array<ArgPropType>(
  "slot",
  "slot2",
  "children2"
);

export type PlasmicContentServices__OverridesType = {
  root?: Flex__<"div">;
  servicesHeading?: Flex__<"h1">;
  columns?: Flex__<"div">;
};

export interface DefaultContentServicesProps {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  children2?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContentServices__RenderFunc(props: {
  variants: PlasmicContentServices__VariantsArgs;
  args: PlasmicContentServices__ArgsType;
  overrides: PlasmicContentServices__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    mode: useMode(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_core_css.plasmic_tokens,
        plasmic_semantic_css.plasmic_tokens,
        plasmic_icon_css.plasmic_tokens,
        plasmic_typography_css.plasmic_tokens,
        plasmic_button_css.plasmic_tokens,
        plasmic_menu_item_css.plasmic_tokens,
        plasmic_input_css.plasmic_tokens,
        sty.root,
        {
          [plasmic_core_css.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          )
        }
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column__aLtod)}
      >
        <h1
          data-plasmic-name={"servicesHeading"}
          data-plasmic-override={overrides.servicesHeading}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            sty.servicesHeading
          )}
        >
          {renderPlasmicSlot({
            defaultContents: "Services.",
            value: args.children2
          })}
        </h1>
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__m1S2J)}
          >
            <Service
              className={classNames("__wab_instance", sty.service__bvDse)}
              slot={renderPlasmicSlot({
                defaultContents: "One on One Consulting Sessions",
                value: args.slot
              })}
              slot2={renderPlasmicSlot({
                defaultContents:
                  "Our personalized consulting sessions are the cornerstone of our service offerings. We provide direct, one-on-one guidance to understand your business\u2019s unique challenges and opportunities within the digital landscape. These sessions enable us to tailor strategies that align with your goals, focusing on leveraging technology for maximum impact.",
                value: args.slot2
              })}
            />
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__cYmrk)}
          >
            <Service
              className={classNames("__wab_instance", sty.service__gddgz)}
              slot={"Professional Development Plans"}
              slot2={
                "Investing in your team\u2019s growth is critical for digital transformation. Our Professional Development Plans are customized to enhance your team's skills and knowledge in key areas such as digital security, software development, and the latest digital trends. Through targeted training and education, we prepare your workforce for the demands of tomorrow\u2019s digital challenges."
              }
            />
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__hhbRt)}
          >
            <Service
              className={classNames("__wab_instance", sty.service__gk4H3)}
              slot={"Professional Development Plans"}
              slot2={
                "Investing in your team\u2019s growth is critical for digital transformation. Our Professional Development Plans are customized to enhance your team's skills and knowledge in key areas such as digital security, software development, and the latest digital trends. Through targeted training and education, we prepare your workforce for the demands of tomorrow\u2019s digital challenges."
              }
            />
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column___8R5WT)}
          >
            <Service
              className={classNames("__wab_instance", sty.service__plJwf)}
              slot={"Website Creation"}
              slot2={
                "Your online presence starts with a powerful, well-designed website. From conceptual design to development and launch, we create websites that reflect your brand\u2019s identity, engage your audience, and are secure. Whether it\u2019s an informational site or a complex e-commerce platform, our team ensures your website is user-friendly, responsive, and optimized for search engines."
              }
            />
          </Stack__>
        </div>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "servicesHeading", "columns"],
  servicesHeading: ["servicesHeading"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  servicesHeading: "h1";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContentServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContentServices__VariantsArgs;
    args?: PlasmicContentServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContentServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContentServices__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContentServices__ArgProps,
          internalVariantPropNames: PlasmicContentServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContentServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContentServices";
  } else {
    func.displayName = `PlasmicContentServices.${nodeName}`;
  }
  return func;
}

export const PlasmicContentServices = Object.assign(
  // Top-level PlasmicContentServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    servicesHeading: makeNodeComponent("servicesHeading"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicContentServices
    internalVariantProps: PlasmicContentServices__VariantProps,
    internalArgProps: PlasmicContentServices__ArgProps
  }
);

export default PlasmicContentServices;
/* prettier-ignore-end */
