import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import globalStyles from "../../globals.module.css";
import { projectApi } from "../../services";
import { TextField } from "../../components/textField/TextField";
import { useDebounce } from "../../hooks/useDebounce";
import { Modal } from "../../components/modal/Modal";
import {
  ProjectForm,
  type ProjectFormValues,
} from "../../components/projectForm/ProjectForm";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const debouncedSearch = useDebounce(search, 500);
  const queryClient = useQueryClient();

  const { data: projects, isFetching } = useQuery({
    queryKey: ["projects", debouncedSearch],
    queryFn: () =>
      projectApi.getAllProjects({
        search: debouncedSearch || undefined,
      }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (newProjectData: ProjectFormValues) =>
      projectApi.createProject({
        createProjectRequest: {
          title: newProjectData.title || "",
          description: newProjectData.description || "",
          columns: newProjectData.columns || [],
          members:
            (newProjectData.members
              ?.map((member) => member)
              .filter(Boolean) as number[]) || [],
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      setIsModalOpen(false);
    },
  });

  return (
    <main className={globalStyles.main}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Dashboard</h1>
        <button onClick={() => setIsModalOpen(true)}>+ Create Project</button>
      </div>

      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to="settings">Settings</Link>
      </nav>

      <TextField
        label="Search projects"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        projects?.map((project) => (
          <div key={project.id}>
            <Link to={`projects/${project.id}`}>
              <h2>{project.title}</h2>
            </Link>
            <p>{project.description}</p>
          </div>
        ))
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Project"
      >
        <ProjectForm isPending={isPending} handleSubmit={mutate} />
      </Modal>
    </main>
  );
}