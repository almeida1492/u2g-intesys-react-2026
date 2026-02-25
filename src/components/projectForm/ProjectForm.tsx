import { useState } from "react";
import "./ProjectForm.css";

type Column = { id: number; title: string };

export function ProjectForm({
  handleSubmit,
}: {
  handleSubmit: (values: {
    title: string;
    description: string;
    members: string;
    columns: Column[];
  }) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState("");
  const [columns, setColumns] = useState<Column[]>([
    { id: 1, title: "" },
    { id: 2, title: "" },
    { id: 3, title: "" },
  ]);
  const [errors, setErrors] = useState<{ title?: string; columns?: string }>({});

  const validate = () => {
    const newErrors: { title?: string; columns?: string } = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (columns.some((col) => !col.title.trim())) newErrors.columns = "All column titles are required.";
    return newErrors;
  };

  const addColumn = () => {
    setColumns([...columns, { id: Date.now(), title: "" }]);
  };

  const updateColumn = (id: number, value: string) => {
    setColumns(columns.map((col) => (col.id === id ? { ...col, title: value } : col)));
  };

  const removeColumn = (id: number) => {
    setColumns(columns.filter((col) => col.id !== id));
  };

  return (
    <div className="pf-overlay">
      <div className="pf-modal">
        <p className="pf-title">create / edit project modal</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newErrors = validate();
            if (Object.keys(newErrors).length > 0) {
              setErrors(newErrors);
              return;
            }
            setErrors({});
            handleSubmit({ title, description, members, columns });
          }}
        >
          {/* Title */}
          <input
            className={`pf-input ${errors.title ? "error" : ""}`}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span className="pf-error">{errors.title}</span>}

          {/* Description */}
          <input
            className="pf-input"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Members */}
          <input
            className="pf-input"
            type="text"
            placeholder="Members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />

          {/* Columns */}
          <div className="pf-columns-row">
            {columns.map((col) => (
              <div key={col.id} className="pf-column-card">
                <span className="pf-column-label">Column title</span>
                <input
                  className="pf-column-input"
                  type="text"
                  value={col.title}
                  onChange={(e) => updateColumn(col.id, e.target.value)}
                />
                <button
                  className="pf-remove-btn"
                  type="button"
                  onClick={() => removeColumn(col.id)}
                >
                  ✕
                </button>
              </div>
            ))}
            <button className="pf-add-col-btn" type="button" onClick={addColumn}>
              +
            </button>
          </div>
          {errors.columns && <span className="pf-error">{errors.columns}</span>}

          {/* Submit */}
          <div className="pf-actions">
            <button className="pf-create-btn" type="submit">
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}