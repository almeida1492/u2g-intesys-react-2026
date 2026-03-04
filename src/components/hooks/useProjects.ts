import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../../services";


export function useProjects(search: string) {
  return useQuery({
    queryKey: ["projects", search],
    queryFn: () =>
      projectApi.getAllProjects({
        search: search || undefined,
      }),
    staleTime: 1000 * 60,
  });
}