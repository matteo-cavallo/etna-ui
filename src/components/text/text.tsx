import { clsx } from "clsx";

import styles from "./text.module.scss";

type FontWeight = "light" | "regular" | "medium" | "bold";

type Variant =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "headline"
  | "subheadline"
  | "body-large"
  | "body"
  | "caption";

type Alignment = "start" | "center" | "end" | "justify";

type Element = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5";

export type TextProps = {
  children?: React.ReactNode;
  variant?: Variant;
  weight?: FontWeight;
  as?: Element;
  align?: Alignment;
  className?: string;
};

export const Text = ({
  children,
  variant = "body",
  weight = "regular",
  as = "p",
  align = "start",
  className: c,
}: TextProps) => {
  const Component = as;
  const className = clsx(
    styles.root,
    styles[variant],
    styles[weight],
    styles[align],
    c,
  );

  return <Component className={className}>{children}</Component>;
};
