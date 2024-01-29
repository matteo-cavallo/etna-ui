import clsx from "clsx";

import styles from "./button.module.scss";
import { Text } from "../text";

type Variant = "primary" | "secondary" | "link";

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: Variant;
};

export const Button = ({ children, variant = "primary" }: ButtonProps) => {
  const className = clsx([styles.root, styles[variant]]);

  return (
    <button className={className}>
      <Text as="span">{children}</Text>
    </button>
  );
};
