import { useState } from "react";

interface Column {
  id: number;
  title: string;
}

interface ProjectFormProps {
  onSubmit: (values: { 
    title: string; 
    description: string; 
    members: string; 
    columns: Column[] 
  }) => void;
}

export function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [members, setMembers] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const [columns, setColumns] = useState<Column[]>([]);

  const addColumn = () => {
    setColumns([...columns, { id: Date.now(), title: "" }]);
  };

  const updateColumn = (id: number, value: string) => {
    setColumns(columns.map((col) => (col.id === id ? { ...col, title: value } : col)));
  };

  const removeColumn = (id: number) => {
    setColumns(columns.filter(col => col.id !== id));
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (title.trim().length < 5) newErrors.title = "Min. 5 characters";
    if (!members.trim()) newErrors.members = "Required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ title, description, members, columns });
    }
  };

  return (
    <form onSubmit={handleLocalSubmit}>
      <h3>Create New Project</h3>
      
      <div>
        <input
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <span>{errors.title}</span>}
      </div>

      <div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
      </div>

      <div>
        <input
          placeholder="Members"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
        {errors.members && <span>{errors.members}</span>}
      </div>
      
      <section>
        <h4>Columns ({columns.length})</h4>
        {columns.length === 0 && <p>No columns added yet.</p>}
        
        {columns.map((col) => (
          <div key={col.id}>
            <input
              placeholder="Column name"
              value={col.title}
              onChange={(e) => updateColumn(col.id, e.target.value)}
            />
            <button type="button" onClick={() => removeColumn(col.id)}>
              ✕
            </button>
          </div>
        ))}

        <button type="button" onClick={addColumn}>
          + Add a Column
        </button>
      </section>

      <button type="submit">
        Save Project
      </button>
    </form>
  );
}