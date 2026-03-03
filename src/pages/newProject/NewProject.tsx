import { useMutation } from "@tanstack/react-query";
import {
  ProjectForm,
  type ProjectFormValues,
} from "../../components/projectForm/ProjectForm";
import { projectApi } from "../../services";

export function NewProject() {
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
  });

  return <ProjectForm isPending={isPending} handleSubmit={mutate} />;
}
