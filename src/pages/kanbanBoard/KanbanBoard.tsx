import {
  DragDropProvider,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import { columnApi, cardApi } from "../../services";
import styles from "./kanbanboard.module.css";

function Card({ card }: { card: any }) {
  const { ref } = useDraggable({ id: card.id || 0 });
  return (
    <div key={card.id} className={styles.card} ref={ref}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>Assigned to: {card.assignedTo?.name}</p>
    </div>
  );
}

function Column({ column }: { column: any }) {
  const { ref } = useDroppable({ id: column.id || 0 });
  return (
    <div key={column.id} className={styles.column} ref={ref}>
      <h2>{column.title}</h2>
      {column.cards?.map((card: any) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export function KanbanBoard() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  
  const { data: columns, isLoading } = useQuery({
    queryKey: ["columns", id],
    queryFn: () => columnApi.getAllColumns(),
    enabled: !!id,
  });

  // useMutation — met a jour la colonne d'une card apres le drag
  const { mutate: moveCard } = useMutation({
    mutationFn: ({ cardId, columnId }: { cardId: number; columnId: number }) =>
      cardApi.updateCard({
        id: cardId,
        updateCardRequest: { columnId },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["columns", id] });
    },
  });

  const handleDragEnd: DragEndEvent = (e) => {
    const sourceId = e.operation.source?.id;
    const targetId = e.operation.target?.id;
    if (!sourceId || !targetId || e.canceled) return;

    const cardId = sourceId as number;
    const newColumnId = targetId as number;

    const cardColumn = columns?.find((col: any) =>
      col.cards?.some((card: any) => card.id === cardId)
    );
    if (!cardColumn || cardColumn.id === newColumnId) return;

    moveCard({ cardId, columnId: newColumnId });
  };

  if (isLoading) return <div>Chargement...</div>;

  if (!columns) {
    navigate("*", { replace: true });
    return null;
  }

  return (
    <section className={styles.kanbanBoard}>
      <h1>Kanban Board</h1>
      <div className={styles.boardsContainer}>
        <DragDropProvider onDragEnd={handleDragEnd}>
          {columns.map((column: any) => (
            <Column key={column.id} column={column} />
          ))}
        </DragDropProvider>
      </div>
    </section>
  );
}