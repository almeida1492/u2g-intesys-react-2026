import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../column/FormStyles.module.css";

export type ProjectFormValues = {
  title: string;
  description: string;
};

type Props = {
  isPending?: boolean;
  initialValues?: ProjectFormValues;
  submitLabel?: string;
  handleSubmit: (values: ProjectFormValues) => void;
  onClose?: () => void;
};

export function ProjectForm({
  isPending,
  initialValues,
  submitLabel = "Create Project",
  handleSubmit,
  onClose,
}: Props) {
  const formik = useFormik<ProjectFormValues>({
    initialValues: initialValues ?? { title: "", description: "" },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="title" className={styles.label}>
          Title *
        </label>
        <input
          id="title"
          name="title"
          className={styles.input}
          placeholder="e.g. Website Redesign"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoFocus
        />
        {formik.touched.title && formik.errors.title && (
          <span className={styles.error}>{formik.errors.title}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="description" className={styles.label}>
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          className={styles.textarea}
          placeholder="Brief description of this project…"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description && (
          <span className={styles.error}>{formik.errors.description}</span>
        )}
      </div>

      <div className={styles.actions}>
        {onClose && (
          <button type="button" className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        )}
        <button type="submit" className={styles.submitBtn} disabled={isPending}>
          {isPending ? "Saving…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
