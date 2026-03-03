import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { projectApi } from "../../services";
import { ProjectForm } from "../../components/projectForm/ProjectForm";

export function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

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
    try {
      await projectApi.createProject({
        createProjectRequest: {
          title: values.title,
          description: values.description,
          members: [],
        },
      });
      setShowForm(false);
      loadProjects();
    } catch (error) {
      console.error("Error creating project", error);
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
          <div
            key={project.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}