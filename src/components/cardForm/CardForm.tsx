import { useMutation } from "@tanstack/react-query";
import { Button } from "../button/Button";
import { TextField } from "../textField/TextField";
import { useFormik } from "formik";
import { cardApi } from "../../services";
import { useNavigate, useParams } from "react-router";
import type { CreateCardRequest } from "../../api";

export function CardForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (values: Pick<CreateCardRequest, "title" | "description">) =>
      cardApi.createCard({
        createCardRequest: {
          title: values.title,
          description: values.description || "",
          columnId: Number(id),
        },
      }),
    onSuccess: () => {
      navigate(`/projects/${id}`);
    },
  });

  const { values, handleChange, handleSubmit } = useFormik<
    Pick<CreateCardRequest, "title" | "description">
  >({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => mutate(values),
  });
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Card</h1>
      <TextField
        label="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <TextField
        label="Description"
        name="description"
        value={values.description}
        onChange={handleChange}
      />
      <Button type="submit">Create Card</Button>
    </form>
  );
}
