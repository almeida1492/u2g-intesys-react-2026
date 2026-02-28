import { useState } from "react";
import "./ProjectForm.css";

export function ProjectForm({
  handleSubmit,
  onClose,
}: {
  handleSubmit: (values: { title: string; description: string }) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{ title?: string }>({});

  const validate = () => {
    const newErrors: { title?: string } = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    return newErrors;
  };

  return (
    <div className="pf-overlay">
      <div className="pf-modal">
        <p className="pf-title">Create or edit project</p>
        <form
          onSubmit={(e) => {
             console.log("Form submitted !"); 
            e.preventDefault();
            const newErrors = validate();
            if (Object.keys(newErrors).length > 0) {
              setErrors(newErrors);
              return;
            }
            setErrors({});
            console.log("Calling handleSubmit with:", { title, description });
            handleSubmit({ title, description });
          }}
        >
          <input
            className={`pf-input ${errors.title ? "error" : ""}`}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span className="pf-error">{errors.title}</span>}
          <input
            className="pf-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="pf-actions">
            <button
              type="button"
              className="pf-cancel-btn"
              onClick={() => {
                console.log("Cancel clicked !");
                onClose();
              }}
            >
              Cancel
            </button>
            <button
              className="pf-create-btn"
              type="submit"
              onClick={() => console.log("Create clicked !")}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
