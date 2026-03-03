import { useFormik } from "formik";
import { useState } from "react";
import type { Project } from "../../api";
import { TextField } from "../textField/TextField";
import * as Yup from "yup";

export type ProjectFormValues = Pick<
  Project,
  "title" | "description" | "columns" | "members"
>;

export function ProjectForm({
  isPending,
  handleSubmit,
  onClose,
}: {
  isPending?: boolean;
  handleSubmit: (values: ProjectFormValues) => void;
}) {
  const formik = useFormik<ProjectFormValues>({
    initialValues: {
      title: "",
      description: "",
      columns: [],
      members: [],
    },
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
        error={formik.errors.title}
        touched={formik.touched.title}
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        id="description"
        name="description"
        label="Description"
        error={formik.errors.description}
        touched={formik.touched.description}
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <button type="submit">{isPending ? "Loading..." : "Create"}</button>
    </form>
  );
}