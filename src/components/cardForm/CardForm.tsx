import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "../textField/TextField";

export interface CardFormValues {
  title: string;
  description: string;
}

interface CardFormProps {
  isPending?: boolean;
  initialValues?: CardFormValues;
  handleSubmit: (values: CardFormValues) => void;
}

export function CardForm({ isPending, initialValues, handleSubmit }: CardFormProps) {
  const formik = useFormik<CardFormValues>({
    initialValues: initialValues || {
      title: "",
      description: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="title"
        name="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.title}
        touched={formik.touched.title}
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.description}
        touched={formik.touched.description}
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "Loading..." : "Save Card"}
      </button>
    </form>
  );
}