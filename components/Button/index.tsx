import { useMemo } from "react";
import styles from "components/Button/Button.module.css";

interface ButtonProps {
  tailwind?: boolean;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  tailwind = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = useMemo(() => {
    if (primary) return styles["storybook-button--primary"];
    if (tailwind) return "bg-red-400 text-white";
    return styles["storybook-button--secondary"];
  }, [primary, tailwind]);

  return (
    <button
      type="button"
      className={[
        styles["storybook-button"],
        styles[`storybook-button--${size}`],
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
