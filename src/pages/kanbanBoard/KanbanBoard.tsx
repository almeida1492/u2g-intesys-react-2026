import {
  DragDropProvider,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/react";
// import type { Card, Column } from "../../api";
import styles from "./kanbanboard.module.css";
import { useState } from "react";

const initialColumns: any = [
  {
    id: 1,
    title: "TO DO",
    position: 0,
    cards: [
      {
        id: 2,
        title: "Do the laundry",
        description: "Wash, dry, and fold clothes",
        assignedTo: {
          name: "Alice",
        },
        columnId: 1,
      },
      {
        id: 3,
        title: "Review pull requests",
        description: "Check and approve pending PRs",
        assignedTo: {
          name: "Bob",
        },
        columnId: 1,
      },
      {
        id: 4,
        title: "Update documentation",
        description: "Add API endpoint descriptions",
        assignedTo: {
          name: "Alice",
        },
        columnId: 1,
      },
      {
        id: 5,
        title: "Fix bug #42",
        description: "Resolve login timeout issue",
        assignedTo: {
          name: "Charlie",
        },
        columnId: 1,
      },
    ],
    projectId: 1,
  },
  {
    id: 6,
    title: "IN PROGRESS",
    position: 1,
    cards: [
      {
        id: 7,
        title: "Implement login feature",
        description: "Add user authentication",
        assignedTo: {
          name: "Bob",
        },
        columnId: 6,
      },
    ],
    projectId: 1,
  },
  {
    id: 8,
    title: "DONE",
    position: 2,
    cards: [
      {
        id: 9,
        title: "Setup project repository",
        description: "Initialize git repo and CI/CD",
        assignedTo: {
          name: "Charlie",
        },
        columnId: 8,
      },
    ],
    projectId: 1,
  },
];

function Card({ card }: { card: any }) {
  const { ref } = useDraggable({
    id: card.id || 0,
  });
  return (
    <div key={card.id} className={styles.card} ref={ref}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>Assigned to: {card.assignedTo?.name}</p>
    </div>
  );
}

function Column({ column }: { column: any }) {
  const { ref } = useDroppable({
    id: column.id || 0,
  });
  return (
    <div key={column.id} className={styles.column} ref={ref}>
      <h2>{column.title}</h2>
      {column.cards?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export function KanbanBoard() {
  const [columns, setColumns] = useState<any[]>(initialColumns);

  const handleDragEnd: DragEndEvent = (e) => {
    const sourceId = e.operation.source?.id;
    const targetId = e.operation.target?.id;
    if (!sourceId || !targetId || e.canceled) return;

    const cardId = sourceId as number;
    const newColumnId = targetId as number;

    const cardColumn = columns.find((col) =>
      col.cards?.some((card) => card.id === cardId),
    );
    if (!cardColumn || cardColumn.id === newColumnId) return;

    const movedCard = cardColumn.cards?.find((card) => card.id === cardId);
    if (!movedCard) return;

    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (!column.cards) return column;

        if (column.id === cardColumn.id) {
          // Remove card from old column
          return {
            ...column,
            cards: column.cards?.filter((card) => card.id !== cardId),
          };
        }

        if (column.id === newColumnId) {
          // Add card to new column
          return {
            ...column,
            cards: [
              ...(column.cards || []),
              { ...movedCard, columnId: newColumnId },
            ],
          };
        }

        return column;
      }),
    );
  };

  return (
    <section className={styles.kanbanBoard}>
      <h1>Open Hospital</h1>
      <div className={styles.boardsContainer}>
        <DragDropProvider onDragEnd={handleDragEnd}>
          {columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </DragDropProvider>
      </div>
    </section>
  );
}
