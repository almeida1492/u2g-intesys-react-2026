import {
  DragDropProvider,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/react";
import styles from "./kanbanboard.module.css";
import { Button } from "../../components/button/Button";
import { Link, useParams } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { columnApi, cardApi } from "../../services";


function CardItem({ card }: { card: any }) {
  const { ref } = useDraggable({ id: card.id || 0 });
  return (
    <div className={styles.card} ref={ref}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>Assigned to: {card.assignedTo?.name}</p>
    </div>
  );
}

function Column({ column }: { column: Column }) {
  const { id } = useParams<{ id: string }>();

  const { ref } = useDroppable({
    id: column.id || 0,
  });

  return (
    <div className={styles.column} ref={ref}>
      <h2>{column.title}</h2>
      {column.cards?.map((card: any) => (
        <CardItem key={card.id} card={card} />
      ))}
      <Link to={`create-card`}>
        <Button asChild>Add Card</Button>
      </Link>
    </div>
  );
}

export function KanbanBoard() {
  const queryClient = useQueryClient();

  const { data: columns = [], isLoading, error } = useQuery({
    queryKey: ["columns"],
    queryFn: () => columnApi.getAllColumns(),
  });

  const { mutate: moveCard } = useMutation({
    mutationFn: ({ id, columnId }: { id: number; columnId: number }) =>
      cardApi.updateCard({
        id,
        updateCardRequest: { columnId },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["columns"] });
    },
  });

  const handleDragEnd: DragEndEvent = (e) => {
    const sourceId = e.operation.source?.id;
    const targetId = e.operation.target?.id;
    if (!sourceId || !targetId || e.canceled) return;

    const cardId = sourceId as number;
    const newColumnId = targetId as number;

    moveCard({ id: cardId, columnId: newColumnId });
  };

  if (isLoading) return <p>Loading columns...</p>;
  if (error) return <p>Error loading columns</p>;

  return (
    <section className={styles.kanbanBoard}>
      <h1>Kanban Board</h1>
      <div className={styles.boardsContainer}>
        <DragDropProvider onDragEnd={handleDragEnd}>
          {columns.map((column: any) => (
            <ColumnItem key={column.id} column={column} />
          ))}
        </DragDropProvider>
      </div>
    </section>
  );
}