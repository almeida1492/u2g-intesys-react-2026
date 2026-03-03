import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { columnApi, fetchMe } from "../../services";
import type { Column } from "../../api";
import "./CardForm.css";

type Props = {
  onSubmit: (values: {
    title: string;
    description: string;
    assignedTo: string;
    columnId: string;
  }) => void;
  onClose: () => void;
};

export const CardForm = ({ onSubmit, onClose }: Props) => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [users, setUsers] = useState<{ username: string }[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [columnsData, meData] = await Promise.all([
          columnApi.getAllColumns(),
          fetchMe(),
        ]);
        setColumns(columnsData);
        setUsers([meData]);
      } catch (error) {
        console.error("Error loading form data", error);
      }
    };
    loadData();
  }, []);

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters"),
    description: Yup.string().max(300, "Description too long"),
    assignedTo: Yup.string().required("Select a user"),
    columnId: Yup.string().required("Select a column"),
  });

  return (
    <Formik
      initialValues={{ title: "", description: "", assignedTo: "", columnId: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="cf-form">
          <Field name="title" placeholder="Card title" className="cf-input" />
          <ErrorMessage name="title" component="div" className="cf-error" />

          <Field as="textarea" name="description" placeholder="Description" className="cf-textarea" />
          <ErrorMessage name="description" component="div" className="cf-error" />

          <Field as="select" name="assignedTo" className="cf-select">
            <option value="">Assign user</option>
            {users.map((user) => (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </Field>
          <ErrorMessage name="assignedTo" component="div" className="cf-error" />

          <Field as="select" name="columnId" className="cf-select">
            <option value="">Select column</option>
            {columns.map((col) => (
              <option key={col.id} value={String(col.id)}>
                {col.title}
              </option>
            ))}
          </Field>
          <ErrorMessage name="columnId" component="div" className="cf-error" />

          <div className="cf-actions">
            <button type="button" className="cf-cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="cf-add-btn" disabled={isSubmitting}>Add</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};