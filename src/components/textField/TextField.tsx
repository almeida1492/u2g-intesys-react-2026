import {
  useEffect,
  useState,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from "react";
import globalStyles from "../../globals.module.css";
import styles from "./textField.module.css";

// export function TextField({
//   label,
//   error,
//   touched,
//   ...props
// }: InputHTMLAttributes<HTMLInputElement> & {
//   label?: string;
//   error?: string | undefined;
//   touched?: boolean | undefined;
// }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [projects, setProjects] = useState<Array<{ title?: string }>>([]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchTerm);
//     }, 500);
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
    <div className={styles.formField}>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
      )}

      <input className={styles.input} {...props} />

      {touched && error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   useEffect(() => {
//     projectApi
//       .getAllProjects()
//       .then((data) => {
//         setProjects(data);
//       })
//       .catch(() => {
//         setProjects([]);
//       });
//   }, []);

//   const filteredProjects = projects.filter(
//     (project) =>
//       project.title &&
//       project.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
//   );

//   return (
//     <div className={globalStyles.formField}>
//       {label && <label htmlFor={props.id}>{label}</label>}
//       <input {...props} />
//       {touched && error && (
//         <span className={globalStyles.errorMessage}>{error}</span>
//       )}
//     </div>
//   );
// }
