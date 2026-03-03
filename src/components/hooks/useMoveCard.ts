
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cardApi } from "../../services";
import type { UpdateCardRequest } from "../../api";

export function useMoveCard() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      updateCardRequest,
    }: {
      id: number;
      updateCardRequest: UpdateCardRequest;
    }) =>
      cardApi.updateCard({
        id,
        updateCardRequest,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["columns"] });
    },
  });
}
