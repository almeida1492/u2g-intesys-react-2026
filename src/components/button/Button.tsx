import type { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  fullWidth?: boolean;
};

export function Button({
  children,
  fullWidth = false,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? "span" : "button";
  return (
    <Component
      className={`${styles.button} ${fullWidth ? styles.fullWidth : ""}`}
      {...props}
    >
      {children}
    </Component>
  );
}
