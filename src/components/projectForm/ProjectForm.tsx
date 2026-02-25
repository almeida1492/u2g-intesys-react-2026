import { useState } from "react";

export function ProjectForm({
  handleSubmit,
}: {
  handleSubmit: (values: { title: string }) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState("");
  const [columns, setColumns] = useState<string[]>([]);
  function addColumn() {
    setColumns([...columns, ""]);
  }

  function updateColumn(index: number, value: string) {
    const newColumns = [...columns];
    newColumns[index] = value;
    setColumns(newColumns);
  }

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
        placeholder="Title"
      />
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
      />
      <input
        type="text"
        id="members"
        name="members"
        value={members}
        onChange={(e) => setMembers(e.target.value)}
        placeholder="Members"
      />

      {columns.map((title, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={title}
            placeholder="Column title"
            onChange={(e) => updateColumn(index, e.target.value)}
            style={{
              border: "none",
              borderBottom: "2px solid black",
              outline: "none",
              padding: "6px",
            }}
          />
        </div>
      ))}

      <button onClick={addColumn}>+</button>
      <span>This field is required</span>
      <button type="submit">Create</button>
    </form>
  );
}
