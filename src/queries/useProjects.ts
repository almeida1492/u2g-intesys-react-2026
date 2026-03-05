import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../services";

export function useProjects() {
  const { data: projects, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: () => projectApi.getAllProjects(),
  });

  return { projects, isFetching };
}
