import { useState, useEffect } from "react";
import { projectApi } from "../../services";
import { ProjectForm } from "../../components/projectForm/ProjectForm";

export function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);

  const loadProjects = async () => {
    try {
      const response = await projectApi.getAllProjects({});
      setProjects(response);
    } catch (error) {
      console.error("Error loading projects", error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreateProject = async (values: any) => {
    console.log("🚀 handleCreateProject called with:", values);
    try {
      console.log("📡 Calling API...");
      const response = await projectApi.createProject({
        projectRequest: {
          title: values.title,
          description: values.description,
        },
      });
      console.log("✅ Project created:", response);
      setShowForm(false);
      loadProjects();
    } catch (error) {
      console.error("❌ Error creating project", error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>+ New Project</button>

      {showForm && (
        <ProjectForm
          handleSubmit={handleCreateProject}
          onClose={() => setShowForm(false)}
        />
      )}

      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Owner: {project.ownerUsername}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
