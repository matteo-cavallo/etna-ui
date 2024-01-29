import { clsx } from "clsx";
import { Text } from "../text";
import {
  PriorityHigh,
  Error,
  Warning,
  CheckCircle,
  Info,
  Lightbulb,
  Close,
} from "@mui/icons-material";

import styles from "./alert.module.scss";

type AlertVariant = "solid" | "outline";
type AlertType =
  | "critical"
  | "danger"
  | "warning"
  | "success"
  | "informative"
  | "discovery";

export interface AlertProps {
  /** The title of the alert */
  title?: string;
  /** The description of the alert */
  description?: string;
  /** The variant of the alert */
  variant?: AlertVariant;
  /** The type of the alert */
  type?: AlertType;
}

const AlertTypeIcons = {
  critical: PriorityHigh,
  danger: Error,
  warning: Warning,
  success: CheckCircle,
  informative: Info,
  discovery: Lightbulb,
};

/**
 * Alert component
 */
export const Alert = ({
  title,
  description,
  variant = "solid",
  type = "informative",
}: AlertProps) => {
  const Icon = AlertTypeIcons[type];

  return (
    <div
      className={clsx(
        styles.alert,
        styles[variant],
        styles[type],
        description ? styles.start : styles.center,
      )}
    >
      <div className={styles.icon}>
        <Icon fontSize="inherit" />
      </div>
      <div className={styles.content}>
        {title && (
          <Text variant="body" weight="bold" className={styles.title}>
            {title}
          </Text>
        )}
        {description && (
          <Text className={styles.description}>{description}</Text>
        )}
      </div>
      <div className={styles.closeButton}>
        <Close onClick={() => null} />
      </div>
    </div>
  );
};
