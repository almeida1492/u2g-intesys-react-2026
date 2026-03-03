import { useFormik } from "formik";
import * as Yup from "yup";

interface ProjectFormProps {
  onSubmit: (values: { title: string }) => void;
}

export function ProjectForm({ onSubmit }: ProjectFormProps) {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
   
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("This field is required"),
    }),

    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm(); 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Project Title"
          id="title"
          name="title"
         
          value={formik.values.title}
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
        />

        {formik.touched.title && formik.errors.title && (
          <span style={{ color: "red", display: "block" }}>
            {formik.errors.title}
          </span>
        )}
      </div>

      <button type="submit">Create</button>
    </form>
  );
}