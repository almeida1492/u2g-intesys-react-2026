import { useFormik } from "formik";
import * as Yup from "yup";

interface CardFormProps {
  onSubmit: (values: { title: string; description: string; assignedTo: string }) => void;
  onDelete?: () => void;
  initialValues?: { title: string; description: string; assignedTo: string };
}

export function CardForm({ onSubmit, onDelete, initialValues }: CardFormProps) {
  const isEditMode = !!initialValues;

  const formik = useFormik({
    initialValues: initialValues || {
      title: "",
      description: "",
      assignedTo: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "Min. 5 characters")
        .required("This field is required"),
      description: Yup.string(),
      assignedTo: Yup.string()
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div>
      <h3>{isEditMode ? "Edit Card" : "Create Card"}</h3>
      <form onSubmit={formik.handleSubmit}>

        <div>
          <input
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <span>{formik.errors.title}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Description"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Assigned to"
            id="assignedTo"
            name="assignedTo"
            value={formik.values.assignedTo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.assignedTo && formik.errors.assignedTo && (
            <span>{formik.errors.assignedTo}</span>
          )}
        </div>

        <div>
          {isEditMode && onDelete && (
            <button type="button" onClick={onDelete}>
              delete card
            </button>
          )}
          <button type="submit">
            {isEditMode ? "create / update" : "create / update"}
          </button>
        </div>

      </form>
    </div>
  );
}