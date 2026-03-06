import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { ColumnResponse } from "../../api";
import styles from "../column/FormStyles.module.css";

type Props = {
  columns: ColumnResponse[];
  defaultColumnId?: number | null;
  onSubmit: (values: {
    title: string;
    description: string;
    columnId: string;
  }) => void;
  onClose: () => void;
};

export function CardForm({ columns, defaultColumnId, onSubmit, onClose }: Props) {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        columnId: defaultColumnId ? String(defaultColumnId) : "",
      }}
      enableReinitialize
      validationSchema={Yup.object({
        title: Yup.string()
          .required("Title is required")
          .min(3, "At least 3 characters"),
        description: Yup.string().max(300, "Max 300 characters"),
        columnId: Yup.string().required("Select a column"),
      })}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Title *</label>
            <Field
              name="title"
              placeholder="e.g. Fix login bug"
              className={styles.input}
              autoFocus
            />
            <ErrorMessage
              name="title"
              component="span"
              className={styles.error}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Description</label>
            <Field
              as="textarea"
              name="description"
              placeholder="Optional details…"
              className={styles.textarea}
            />
            <ErrorMessage
              name="description"
              component="span"
              className={styles.error}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Column *</label>
            <Field as="select" name="columnId" className={styles.select}>
              <option value="">Select a column</option>
              {columns.map((col) => (
                <option key={col.id} value={String(col.id)}>
                  {col.title}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="columnId"
              component="span"
              className={styles.error}
            />
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              Add Card
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
