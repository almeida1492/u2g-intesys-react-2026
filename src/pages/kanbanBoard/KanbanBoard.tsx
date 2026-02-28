import {
  DragDropProvider,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/react";
import styles from "./kanbanboard.module.css";
import { useState, useEffect } from "react";
import { columnApi } from "../../services"; 

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

function ColumnItem({ column }: { column: any }) {
  const { ref } = useDroppable({ id: column.id || 0 });
  return (
    <div className={styles.column} ref={ref}>
      <h2>{column.title}</h2>
      {column.cards?.map((card: any) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export function KanbanBoard() {
  const [columns, setColumns] = useState<any[]>([]);

  useEffect(() => {
    const loadColumns = async () => {
      try {
        const response = await columnApi.getAllColumns();
        setColumns(response);
      } catch (error) {
        console.error("Error loading columns", error);
      }
    };
    loadColumns();
  }, []);

  const handleDragEnd: DragEndEvent = (e) => {
    const sourceId = e.operation.source?.id;
    const targetId = e.operation.target?.id;
    if (!sourceId || !targetId || e.canceled) return;

    const cardId = sourceId as number;
    const newColumnId = targetId as number;

    const cardColumn = columns.find((col) =>
      col.cards?.some((card: any) => card.id === cardId)
    );
    if (!cardColumn || cardColumn.id === newColumnId) return;

    const movedCard = cardColumn.cards?.find((card: any) => card.id === cardId);
    if (!movedCard) return;

    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (!column.cards) return column;
        if (column.id === cardColumn.id) {
          return {
            ...column,
            cards: column.cards.filter((card: any) => card.id !== cardId),
          };
        }
        if (column.id === newColumnId) {
          return {
            ...column,
            cards: [...column.cards, { ...movedCard, columnId: newColumnId }],
          };
        }
        return column;
      })
    );
  };

  return (
    <section className={styles.kanbanBoard}>
      <h1>Kanban Board</h1>
      <div className={styles.boardsContainer}>
        <DragDropProvider onDragEnd={handleDragEnd}>
          {columns.map((column) => (
            <ColumnItem key={column.id} column={column} />
          ))}
        </DragDropProvider>
      </div>
    </section>
  );
}