import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { projectApi } from "../../services";
import { ProjectForm, type ProjectFormValues } from "../../components/projectForm/ProjectForm";
import { Modal } from "../../components/modal/Modal";

type Project = {
  id: number;
  title: string;
  description?: string;
};

export function ProjectsPage() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // load projects
  async function loadProjects() {
    const res = await projectApi.getProjects();
    setProjects(res.data);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  // filter projects
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // update project
  async function handleUpdate(values: ProjectFormValues) {
    if (!editingProject) return;

    await projectApi.updateProject(editingProject.id, values);

    setEditingProject(null);
    loadProjects();
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Projects</h1>

      {/* search */}
      <input
        type="text"
        placeholder="Search project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "300px",
        }}
      />

      {/* list */}
      <div style={{ display: "grid", gap: "16px" }}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "white",
            }}
          >
            {/* project content */}
            <div
              style={{ cursor: "pointer", flex: 1 }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <h3 style={{ margin: 0 }}>{project.title}</h3>
              <p style={{ margin: "4px 0 0 0", color: "#555" }}>
                {project.description}
              </p>
            </div>

            {/* edit button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEditingProject(project);
              }}
              style={{
                marginLeft: "12px",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                background: "#6366f1",
                color: "white",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* edit modal */}
      <Modal
        isOpen={!!editingProject}
        onClose={() => setEditingProject(null)}
        title="Edit Project"
      >
        <ProjectForm
          initialValues={{
            title: editingProject?.title ?? "",
            description: editingProject?.description ?? "",
          }}
          submitLabel="Update Project"
          handleSubmit={handleUpdate}
          onClose={() => setEditingProject(null)}
        />
      </Modal>
    </div>
  );
}