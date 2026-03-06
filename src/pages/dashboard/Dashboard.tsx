import { useMemo, useState } from "react";
import { TextField } from "../../components/textField/TextField";
import { useProjects } from "../../queries/useProjects";
import { ProjectDetailsCard } from "../../components/projectDetailsCard/ProjectDetailsCard";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router";
import { useDebounce } from "../../components/hooks/useDebounce";
import { Modal } from "../../components/modal/Modal";
import { ProjectForm } from "../../components/projectForm/ProjectForm";
import { projectApi } from "../../services";
import { useQueryClient } from "@tanstack/react-query";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // ← état qui contrôle l'ouverture du Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { projects, isFetching } = useProjects();

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (!debouncedSearch?.trim()) return projects;
    const query = debouncedSearch.toLowerCase();
    return projects.filter(
      (project) =>
        project.title?.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query),
    );
  }, [projects, debouncedSearch]);

  const handleCreateProject = async (values: { title: string; description: string }) => {
    try {
      await projectApi.createProject({
        createProjectRequest: {
          title: values.title,
          description: values.description,
          members: [],
        },
      });
      // Recharge la liste des projets
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      // Ferme le Modal
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating project", error);
    }
  };

  return (
    <>
      <h1>Dashboard</h1>

      {/* Bouton pour ouvrir le Modal */}
      <button onClick={() => setIsModalOpen(true)}>+ New Project</button>

      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search..."
      />

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.projectsGrid}>
          {filteredProjects?.map((project) => (
            <ProjectDetailsCard
              key={project.id}
              project={project}
              onClick={() => navigate(`/projects/${project.id}`)}
            />
          ))}
        </div>
      )}

      {/* Le Modal avec le formulaire dedans */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Project"
      >
        <ProjectForm
          handleSubmit={handleCreateProject}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}