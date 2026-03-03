import type { InputHTMLAttributes, PropsWithChildren } from "react";
import globalStyles from "../../globals.module.css";

export function TextField({
  label,
  error,
  touched,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | undefined;
  touched?: boolean | undefined;
}) {
  return (
    <div className={globalStyles.formField}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input {...props} />
      {touched && error && (
        <span className={globalStyles.errorMessage}>{error}</span>
      )}
    </div>
  );
}
