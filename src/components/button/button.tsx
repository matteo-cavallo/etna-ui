import clsx from "clsx";

import styles from "./button.module.scss";

export type Variant = "primary" | "secondary" | "link";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: Variant;
  size?: ButtonSize;
};

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
}: ButtonProps) => {
  const className = clsx([styles.root, styles[variant], styles[size]]);

  return <button className={className}>{children}</button>;
};
