import { useRef, type InputHTMLAttributes } from "react";
import globalStyles from "../../globals.module.css";
import styles from "./TextField.module.css";

export function TextField({
  label,
  error,
  touched,
  variant,
  value,
  onChange,
  onClear,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  variant?: "default" | "search";
  onClear?: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onClear?.();
    // Maintenir le focus après effacement
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className={`${globalStyles.formField} ${variant === "search" ? styles.searchWrapper : ""}`}>
      {label && <label htmlFor={props.id}>{label}</label>}

      {variant === "search" ? (
        <div className={styles.searchInputWrapper}>
          <svg
            className={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            ref={inputRef}
            className={styles.searchInput}
            value={value}
            onChange={onChange}
            {...props}
          />

          {/* Toujours rendu, juste invisible — évite le re-render qui casse le focus */}
          <button
            type="button"
            className={styles.clearButton}
            style={{ visibility: value ? "visible" : "hidden" }}
            onMouseDown={(e) => e.preventDefault()} // empêche le blur de l'input
            onClick={handleClear}
            tabIndex={-1}
            aria-label="Effacer la recherche"
          >
            ✕
          </button>
        </div>
      ) : (
        <input value={value} onChange={onChange} {...props} />
      )}

      {touched && error && (
        <span className={globalStyles.errorMessage}>{error}</span>
      )}
    </div>
  );
}
