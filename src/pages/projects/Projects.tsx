import { useState } from "react";
import { useNavigate } from "react-router";
import { useDebounce } from "../../components/hooks/useDebounce";
import { useProjects } from "../../components/hooks/useProjects";
import { projectApi } from "../../services";
import { ProjectForm } from "../../components/projectForm/ProjectForm";
import { TextField } from "../../components/textField/TextField";

function highlight(text: string, term: string) {
  if (!term) return <>{text}</>;
  const parts = text.split(new RegExp(`(${term})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <mark
            key={i}
            style={{
              backgroundColor: "#fef08a",
              borderRadius: "3px",
              padding: "0 2px",
              fontWeight: 600,
            }}
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function ProjectsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const debouncedSearch = useDebounce(search, 500);
  const isSearching = search !== debouncedSearch;

  const {
    data: projects = [],
    isLoading,
    isError,
    refetch,
  } = useProjects(debouncedSearch);

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
      refetch();
    } catch (error) {
      console.error("Error creating project", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Projects</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <TextField
          variant="search"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
        />
        <button onClick={() => setShowForm(true)}>+ New Project</button>
      </div>

      {showForm && (
        <ProjectForm
          handleSubmit={handleCreateProject}
          onClose={() => setShowForm(false)}
        />
      )}

      <div>
        {isLoading || isSearching ? (
          <p style={{ color: "#94a3b8", fontStyle: "italic" }}>
            Recherche en cours...
          </p>
        ) : isError ? (
          <p>Erreur lors du chargement.</p>
        ) : projects.length === 0 && debouncedSearch ? (
          <p>
            Aucun projet trouvé pour "<strong>{debouncedSearch}</strong>".{" "}
            <span
              style={{
                color: "#6366f1",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setSearch("")}
            >
              Effacer la recherche
            </span>
          </p>
        ) : projects.length === 0 ? (
          <p>Aucun projet pour l'instant.</p>
        ) : (
          projects.map((project: any) => (
            <div
              key={project.id}
              style={{
                cursor: "pointer",
                border: "1px solid #e2e8f0",
                padding: "14px 16px",
                marginBottom: "10px",
                borderRadius: "10px",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 12px rgba(99,102,241,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#c7d2fe";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#e2e8f0";
              }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <h3 style={{ margin: "0 0 4px 0" }}>
                {highlight(project.title, debouncedSearch)}
              </h3>
              <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>
                {highlight(project.description ?? "", debouncedSearch)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
