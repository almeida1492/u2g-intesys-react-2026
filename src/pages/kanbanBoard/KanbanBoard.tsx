import {
  DragDropProvider,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useState } from "react";
import { columnApi, cardApi, projectApi } from "../../services";
import { Modal } from "../../components/modal/Modal";
import { CardForm } from "../../components/card/CardForm";
import { ColumnForm, type ColumnFormValues } from "../../components/column/ColumnForm";
import type { ColumnResponse, Card } from "../../api";
import styles from "./kanbanboard.module.css";

/* ---------------- CARD ---------------- */

function CardItem({ card }: { card: Card }) {
  const { ref } = useDraggable({
    id: String(card.id),
  });

  return (
    <div ref={ref} className={styles.card}>
      <h3>{card.title}</h3>

      {card.description && <p>{card.description}</p>}

      {card.assignedTo && (
        <small>
          👤 {card.assignedTo.name} {card.assignedTo.surname}
        </small>
      )}
    </div>
  );
}

/* ---------------- COLUMN ---------------- */

function ColumnItem({
  column,
  onAddCard,
}: {
  column: ColumnResponse & { cards: Card[] };
  onAddCard: (columnId: number) => void;
}) {
  const { ref } = useDroppable({
    id: String(column.id),
  });

  return (
    <div className={styles.column} ref={ref}>
      <h2>{column.title}</h2>

      {column.cards && column.cards.length > 0 ? (
        column.cards.map((card) => <CardItem key={card.id} card={card} />)
      ) : (
        <p style={{ color: "#94a3b8" }}>No cards</p>
      )}

      <button onClick={() => onAddCard(column.id!)}>+ Add card</button>
    </div>
  );
}

/* ---------------- BOARD ---------------- */

export function KanbanBoard() {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);

  const [columnsWithCards, setColumnsWithCards] = useState<
    (ColumnResponse & { cards: Card[] })[]
  >([]);

  const [cardModal, setCardModal] = useState(false);
  const [columnModal, setColumnModal] = useState(false);
  const [selectedColumnId, setSelectedColumnId] = useState<number | null>(null);

  /* -------- PROJECT -------- */

  const { data: project } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => projectApi.getProjectById({ id: projectId }),
    enabled: !!projectId,
  });

  /* -------- LOAD COLUMNS -------- */

  const { isLoading } = useQuery({
    queryKey: ["columns", projectId],
    queryFn: async () => {
      const cols = await columnApi.getColumnsByProjectId({id: projectId});

      const projectCols = (cols as ColumnResponse[])
        .filter((c) => c.projectId === projectId)
        .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));

      const fullCols = await Promise.all(
        projectCols.map((col) => columnApi.getColumnById({ id: col.id! }))
      );

      const result = fullCols.map((col) => ({
        ...col,
        cards: col.cards ?? [],
      }));

      setColumnsWithCards(result);

      return result;
    },
    enabled: !!projectId,
  });

  /* -------- MOVE CARD -------- */

  const { mutate: moveCard } = useMutation({
    mutationFn: ({ id, columnId }: { id: number; columnId: number }) =>
      cardApi.updateCard({
        id,
        updateCardRequest: { columnId },
      }),

    onSuccess: async () => {
      const refreshed = await Promise.all(
        columnsWithCards.map((col) => columnApi.getColumnById({ id: col.id! }))
      );

      setColumnsWithCards(
        refreshed.map((col) => ({
          ...col,
          cards: col.cards ?? [],
        }))
      );
    },
  });

  const handleDragEnd: DragEndEvent = (e) => {
    const sourceId = e.operation.source?.id;
    const targetId = e.operation.target?.id;

    if (!sourceId || !targetId || e.canceled) return;

    moveCard({
      id: Number(sourceId),
      columnId: Number(targetId),
    });
  };

  /* -------- ADD CARD -------- */

  const handleAddCard = (columnId: number) => {
    setSelectedColumnId(columnId);
    setCardModal(true);
  };

  const handleCardSubmit = async (values: {
    title: string;
    description: string;
    columnId: string;
  }) => {
    const columnId = Number(values.columnId);

    const newCard = await cardApi.createCard({
      createCardRequest: {
        title: values.title,
        description: values.description || "",
        columnId,
      },
    });

    /* AJOUT LOCAL IMMEDIAT */

    setColumnsWithCards((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, cards: [...(col.cards ?? []), newCard] }
          : col
      )
    );

    setCardModal(false);
    setSelectedColumnId(null);
  };

  /* -------- ADD COLUMN -------- */

  const handleColumnSubmit = async (values: ColumnFormValues) => {
    const newCol = await columnApi.createColumn({
      createColumnRequest: {
        title: values.title,
        position: columnsWithCards.length,
        projectId,
      },
    });

    setColumnsWithCards((prev) => [...prev, { ...newCol, cards: [] }]);

    setColumnModal(false);
  };

  if (isLoading) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <section className={styles.kanbanBoard}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{project?.title}</h1>
        <button onClick={() => setColumnModal(true)}>+ Add column</button>
      </div>

      <div className={styles.boardsContainer}>
        <DragDropProvider onDragEnd={handleDragEnd}>
          {columnsWithCards.map((column) => (
            <ColumnItem
              key={column.id}
              column={column}
              onAddCard={handleAddCard}
            />
          ))}
        </DragDropProvider>
      </div>

      {/* CARD MODAL */}

      <Modal
        isOpen={cardModal}
        onClose={() => setCardModal(false)}
        title="Add Card"
      >
        <CardForm
          columns={columnsWithCards}
          defaultColumnId={selectedColumnId}
          onSubmit={handleCardSubmit}
          onClose={() => setCardModal(false)}
          projectId={projectId}
        />
      </Modal>

      {/* COLUMN MODAL */}

      <Modal
        isOpen={columnModal}
        onClose={() => setColumnModal(false)}
        title="Add Column"
      >
        <ColumnForm
          handleSubmit={handleColumnSubmit}
          onClose={() => setColumnModal(false)}
        />
      </Modal>
    </section>
  );
}