import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./FormStyles.module.css";

export type ColumnFormValues = {
  title: string;
};

type Props = {
  isPending?: boolean;
  initialValues?: ColumnFormValues;
  submitLabel?: string;
  handleSubmit: (values: ColumnFormValues) => void;
  onClose?: () => void;
};

export function ColumnForm({
  isPending,
  initialValues,
  submitLabel = "Create Column",
  handleSubmit,
  onClose,
}: Props) {
  const formik = useFormik<ColumnFormValues>({
    initialValues: initialValues ?? { title: "" },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string().required("Column title is required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="col-title" className={styles.label}>
          Column name *
        </label>
        <input
          id="col-title"
          name="title"
          className={styles.input}
          placeholder="e.g. To Do, In Progress, Done…"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoFocus
        />
        {formik.touched.title && formik.errors.title && (
          <span className={styles.error}>{formik.errors.title}</span>
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
