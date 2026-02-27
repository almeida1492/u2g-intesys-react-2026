import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { apiService } from "../../services/api";
import type { Project } from "../../types";

export function KanbanBoard() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) {
        navigate("*", { replace: true });
        return;
      }

      try {
        
        const mockProjects: Project[] = [
          { 
            id: "1", 
            name: "Projet Alpha", 
            ownerId: "1", 
            createdAt: new Date().toISOString(), 
            updatedAt: new Date().toISOString(),
            members: [],
            tasks: []
          },
          { 
            id: "2", 
            name: "Projet Beta", 
            ownerId: "1", 
            createdAt: new Date().toISOString(), 
            updatedAt: new Date().toISOString(),
            members: [],
            tasks: []
          },
          { 
            id: "3", 
            name: "Projet Gamma", 
            ownerId: "1", 
            createdAt: new Date().toISOString(), 
            updatedAt: new Date().toISOString(),
            members: [],
            tasks: []
          },
        ];
        
        const foundProject = mockProjects.find(p => p.id === id);
        
        if (foundProject) {
          setProject(foundProject);
        } else {
          navigate("*", { replace: true });
        }
      } catch (err) {
        navigate("*", { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id, navigate]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (!project) {
    return null;
  }

  return (
    <div>
      <h1>KANBAN BOARD - {project.name}</h1>
      <p>Contenu du tableau Kanban pour le projet {project.id}</p>
    </div>
  );
}