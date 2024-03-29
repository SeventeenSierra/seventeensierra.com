// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nnAfd7uGSka2TBy9ktGmJn
// Component: VN2J2Ntn1jnG

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Input from "../../Input"; // plasmic-import: RHJkBmrpbhOs/component
import Button from "../../Button"; // plasmic-import: 3BnfwULcRUyf/component

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
import sty from "./PlasmicContentContact.module.css"; // plasmic-import: VN2J2Ntn1jnG/css

import SearchsvgIcon from "../input/icons/PlasmicIcon__Searchsvg"; // plasmic-import: Oms9CFYd7yLE/icon
import ChecksvgIcon from "../input/icons/PlasmicIcon__Checksvg"; // plasmic-import: U-95Dvg0ealp/icon
import FaCircleDotRegularsvgIcon from "../button/icons/PlasmicIcon__FaCircleDotRegularsvg"; // plasmic-import: vG5cW6c7Inr9/icon

createPlasmicElementProxy;

export type PlasmicContentContact__VariantMembers = {};
export type PlasmicContentContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContentContact__VariantsArgs;
export const PlasmicContentContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContentContact__ArgsType = {
  headingSlot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicContentContact__ArgsType;
export const PlasmicContentContact__ArgProps = new Array<ArgPropType>(
  "headingSlot"
);

export type PlasmicContentContact__OverridesType = {
  contactBase?: Flex__<"div">;
  column?: Flex__<"div">;
  contactHeading?: Flex__<"h1">;
  contactForm?: Flex__<"div">;
  nameGroup?: Flex__<"div">;
  firstNameStack?: Flex__<"div">;
  input?: Flex__<typeof Input>;
  lastNameStack?: Flex__<"div">;
  input3?: Flex__<typeof Input>;
  emailGroup?: Flex__<"div">;
  emailStack?: Flex__<"div">;
  input2?: Flex__<typeof Input>;
  actionStack?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultContentContactProps {
  headingSlot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContentContact__RenderFunc(props: {
  variants: PlasmicContentContact__VariantsArgs;
  args: PlasmicContentContact__ArgsType;
  overrides: PlasmicContentContact__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "input3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "leslie",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return {
                fields: [
                  {
                    name: "firstname",
                    value: $state.input.value
                  },
                  {
                    name: "lastname",
                    value: $state.input3.value
                  },
                  {
                    name: "email",
                    value: $state.input2.value
                  }
                ],

                context: {
                  pageUri: "www.yourwebsite.com/form",
                  pageName: "Home Page"
                }
              };
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
      },
      {
        path: "submitted",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return false;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return false;
              }
              throw e;
            }
          })()
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const globalVariants = ensureGlobalVariants({
    mode: useMode(),
    screen: useScreenVariantsohEUf6Jd0EV8()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"contactBase"}
      data-plasmic-override={overrides.contactBase}
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
        sty.contactBase,
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
        data-plasmic-name={"column"}
        data-plasmic-override={overrides.column}
        hasGap={true}
        className={classNames(projectcss.all, sty.column)}
      >
        <h1
          data-plasmic-name={"contactHeading"}
          data-plasmic-override={overrides.contactHeading}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            sty.contactHeading
          )}
        >
          {renderPlasmicSlot({
            defaultContents: "Contact.",
            value: args.headingSlot
          })}
        </h1>
        <Stack__
          as={"div"}
          data-plasmic-name={"contactForm"}
          data-plasmic-override={overrides.contactForm}
          hasGap={true}
          className={classNames(projectcss.all, sty.contactForm)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"nameGroup"}
            data-plasmic-override={overrides.nameGroup}
            hasGap={true}
            className={classNames(projectcss.all, sty.nameGroup)}
          >
            <div
              data-plasmic-name={"firstNameStack"}
              data-plasmic-override={overrides.firstNameStack}
              className={classNames(projectcss.all, sty.firstNameStack)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pMTlZ
                )}
              >
                {"First Name"}
              </div>
              <Input
                data-plasmic-name={"input"}
                data-plasmic-override={overrides.input}
                className={classNames("__wab_instance", sty.input)}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["input", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={``}
                type={"text"}
                value={generateStateValueProp($state, ["input", "value"]) ?? ""}
              />
            </div>
            <div
              data-plasmic-name={"lastNameStack"}
              data-plasmic-override={overrides.lastNameStack}
              className={classNames(projectcss.all, sty.lastNameStack)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rRtn0
                )}
              >
                {"Last Name"}
              </div>
              <Input
                data-plasmic-name={"input3"}
                data-plasmic-override={overrides.input3}
                className={classNames("__wab_instance", sty.input3)}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["input3", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={``}
                type={"text"}
                value={
                  generateStateValueProp($state, ["input3", "value"]) ?? ""
                }
              />
            </div>
          </Stack__>
          <div
            data-plasmic-name={"emailGroup"}
            data-plasmic-override={overrides.emailGroup}
            className={classNames(projectcss.all, sty.emailGroup)}
          >
            <div
              data-plasmic-name={"emailStack"}
              data-plasmic-override={overrides.emailStack}
              className={classNames(projectcss.all, sty.emailStack)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__roy2U
                )}
              >
                {"Email"}
              </div>
              <Input
                data-plasmic-name={"input2"}
                data-plasmic-override={overrides.input2}
                className={classNames("__wab_instance", sty.input2)}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["input2", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={``}
                type={"email"}
                value={
                  generateStateValueProp($state, ["input2", "value"]) ?? ""
                }
              />
            </div>
          </div>
          <div
            data-plasmic-name={"actionStack"}
            data-plasmic-override={overrides.actionStack}
            className={classNames(projectcss.all, sty.actionStack)}
          >
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              background={"primary"}
              className={classNames("__wab_instance", sty.button)}
              onClick={async event => {
                const $steps = {};

                $steps["httpPost"] = true
                  ? (() => {
                      const actionArgs = {
                        dataOp: {
                          sourceId: "sJUStB4LqPeKBKrzzFcMdQ",
                          opId: "e0f2aa87-8266-4760-8332-4a52570ca813",
                          userArgs: {
                            body: [$state.leslie]
                          },
                          cacheKey: null,
                          invalidatedKeys: ["plasmic_refresh_all"],
                          roleId: null
                        },
                        continueOnError: false
                      };
                      return (async ({ dataOp, continueOnError }) => {
                        try {
                          const response = await executePlasmicDataOp(dataOp, {
                            userAuthToken: dataSourcesCtx?.userAuthToken,
                            user: dataSourcesCtx?.user
                          });
                          await plasmicInvalidate(dataOp.invalidatedKeys);
                          return response;
                        } catch (e) {
                          if (!continueOnError) {
                            throw e;
                          }
                          return e;
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["httpPost"] != null &&
                  typeof $steps["httpPost"] === "object" &&
                  typeof $steps["httpPost"].then === "function"
                ) {
                  $steps["httpPost"] = await $steps["httpPost"];
                }

                $steps["updateSubmitted"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["submitted"]
                        },
                        operation: 0,
                        value: true
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateSubmitted"] != null &&
                  typeof $steps["updateSubmitted"] === "object" &&
                  typeof $steps["updateSubmitted"].then === "function"
                ) {
                  $steps["updateSubmitted"] = await $steps["updateSubmitted"];
                }
              }}
              submitsForm={true}
            >
              {"Submit"}
            </Button>
            {(() => {
              try {
                return $state.submitted;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hxR7C
                )}
              >
                {"Thanks for submitting!"}
              </div>
            ) : null}
          </div>
        </Stack__>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  contactBase: [
    "contactBase",
    "column",
    "contactHeading",
    "contactForm",
    "nameGroup",
    "firstNameStack",
    "input",
    "lastNameStack",
    "input3",
    "emailGroup",
    "emailStack",
    "input2",
    "actionStack",
    "button"
  ],
  column: [
    "column",
    "contactHeading",
    "contactForm",
    "nameGroup",
    "firstNameStack",
    "input",
    "lastNameStack",
    "input3",
    "emailGroup",
    "emailStack",
    "input2",
    "actionStack",
    "button"
  ],
  contactHeading: ["contactHeading"],
  contactForm: [
    "contactForm",
    "nameGroup",
    "firstNameStack",
    "input",
    "lastNameStack",
    "input3",
    "emailGroup",
    "emailStack",
    "input2",
    "actionStack",
    "button"
  ],
  nameGroup: [
    "nameGroup",
    "firstNameStack",
    "input",
    "lastNameStack",
    "input3"
  ],
  firstNameStack: ["firstNameStack", "input"],
  input: ["input"],
  lastNameStack: ["lastNameStack", "input3"],
  input3: ["input3"],
  emailGroup: ["emailGroup", "emailStack", "input2"],
  emailStack: ["emailStack", "input2"],
  input2: ["input2"],
  actionStack: ["actionStack", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  contactBase: "div";
  column: "div";
  contactHeading: "h1";
  contactForm: "div";
  nameGroup: "div";
  firstNameStack: "div";
  input: typeof Input;
  lastNameStack: "div";
  input3: typeof Input;
  emailGroup: "div";
  emailStack: "div";
  input2: typeof Input;
  actionStack: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContentContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContentContact__VariantsArgs;
    args?: PlasmicContentContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContentContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContentContact__ArgsType,
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
          internalArgPropNames: PlasmicContentContact__ArgProps,
          internalVariantPropNames: PlasmicContentContact__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContentContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "contactBase") {
    func.displayName = "PlasmicContentContact";
  } else {
    func.displayName = `PlasmicContentContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContentContact = Object.assign(
  // Top-level PlasmicContentContact renders the root element
  makeNodeComponent("contactBase"),
  {
    // Helper components rendering sub-elements
    column: makeNodeComponent("column"),
    contactHeading: makeNodeComponent("contactHeading"),
    contactForm: makeNodeComponent("contactForm"),
    nameGroup: makeNodeComponent("nameGroup"),
    firstNameStack: makeNodeComponent("firstNameStack"),
    input: makeNodeComponent("input"),
    lastNameStack: makeNodeComponent("lastNameStack"),
    input3: makeNodeComponent("input3"),
    emailGroup: makeNodeComponent("emailGroup"),
    emailStack: makeNodeComponent("emailStack"),
    input2: makeNodeComponent("input2"),
    actionStack: makeNodeComponent("actionStack"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicContentContact
    internalVariantProps: PlasmicContentContact__VariantProps,
    internalArgProps: PlasmicContentContact__ArgProps
  }
);

export default PlasmicContentContact;
/* prettier-ignore-end */
