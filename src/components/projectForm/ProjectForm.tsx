import { useState } from "react";

export function ProjectForm({
  handleSubmit,
}: {
  handleSubmit: (values: { title: string }) => void;
}) {
  const [title, setTitle] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ title });
      }}
    >
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span>This field is required</span>
      <button type="submit">Create</button>
    </form>
  );
}
