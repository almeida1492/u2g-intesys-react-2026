import {
  DragDropProvider,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import type { Card, Column } from "../../api";
import styles from "./kanbanboard.module.css";
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modal/Modal";
import { CardForm, type CardFormValues } from "../../components/cardForm/CardForm";
import { cardApi } from "../../services";

const initialColumns: Column[] = [
  {
    id: 1,
    title: "TO DO",
    position: 0,
    cards: [
      { id: 2, title: "Do the laundry", description: "Wash, dry, and fold clothes", assignedTo: { name: "Alice" }, columnId: 1 },
      { id: 3, title: "Review pull requests", description: "Check and approve pending PRs", assignedTo: { name: "Bob" }, columnId: 1 },
    ],
    projectId: 1,
  },
  {
    id: 6,
    title: "IN PROGRESS",
    position: 1,
    cards: [
      { id: 7, title: "Implement login feature", description: "Add user authentication", assignedTo: { name: "Bob" }, columnId: 6 },
    ],
    projectId: 1,
  },
  {
    id: 8,
    title: "DONE",
    position: 2,
    cards: [
      { id: 9, title: "Setup project repository", description: "Initialize git repo and CI/CD", assignedTo: { name: "Charlie" }, columnId: 8 },
    ],
    projectId: 1,
  },
];

// ─── CARD COMPONENT ──────────────────────────────────────────

interface CardComponentProps {
  card: Card;
  onEdit: (card: Card) => void;
}

function CardComponent({ card, onEdit }: CardComponentProps) {
  const { ref } = useDraggable({ id: card.id || 0 });

  return (
    <div className={styles.card} ref={ref}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>Assigned to: {card.assignedTo?.name}</p>
      <button onClick={() => onEdit(card)}>Edit</button>
    </div>
  );
}

// ─── COLUMN COMPONENT ────────────────────────────────────────

interface ColumnComponentProps {
  column: Column;
  onAddCard: (columnId: number) => void;
  onEditCard: (card: Card) => void;
}

function ColumnComponent({ column, onAddCard, onEditCard }: ColumnComponentProps) {
  const { ref } = useDroppable({ id: column.id || 0 });

  return (
    <div className={styles.column} ref={ref}>
      <h2>{column.title}</h2>
      {column.cards?.map((card) => (
        <CardComponent key={card.id} card={card} onEdit={onEditCard} />
      ))}
      <Button onClick={() => onAddCard(column.id || 0)}>+ Add Card</Button>
    </div>
  );
}

// ─── KANBAN BOARD ────────────────────────────────────────────

export function KanbanBoard() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const [columns, setColumns] = useState<Column[]>(initialColumns);

  // Modal state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedColumnId, setSelectedColumnId] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  // ── Create card mutation
  const { mutate: createCard, isPending: isCreating } = useMutation({
    mutationFn: (values: CardFormValues) =>
      cardApi.createCard({
        createCardRequest: {
          title: values.title,
          description: values.description,
          columnId: selectedColumnId!,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["columns", id] });
      setIsCreateModalOpen(false);
      setSelectedColumnId(null);
    },
  });

  // ── Update card mutation
  const { mutate: updateCard, isPending: isUpdating } = useMutation({
    mutationFn: (values: CardFormValues) =>
      cardApi.updateCard({
        id: selectedCard?.id!,
       updateCardRequest: {
  title: values.title,
  description: values.description || "",
  columnId: selectedCard?.columnId ?? 0,
},
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["columns", id] });
      setIsEditModalOpen(false);
      setSelectedCard(null);
    },
  });

  // ── Move card mutation (drag and drop)
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

  // ── Open create modal
  const handleAddCard = (columnId: number) => {
    setSelectedColumnId(columnId);
    setIsCreateModalOpen(true);
  };

  // ── Open edit modal
  const handleEditCard = (card: Card) => {
    setSelectedCard(card);
    setIsEditModalOpen(true);
  };

  // ── Drag and drop
  const handleDragEnd: DragEndEvent = (e) => {
    const sourceId = e.operation.source?.id;
    const targetId = e.operation.target?.id;
    if (!sourceId || !targetId || e.canceled) return;

    const cardId = sourceId as number;
    const newColumnId = targetId as number;

    const cardColumn = columns.find((col) =>
      col.cards?.some((card) => card.id === cardId)
    );
    if (!cardColumn || cardColumn.id === newColumnId) return;

    const movedCard = cardColumn.cards?.find((card) => card.id === cardId);
    if (!movedCard) return;

    // Optimistic UI update
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (!column.cards) return column;
        if (column.id === cardColumn.id) {
          return { ...column, cards: column.cards.filter((card) => card.id !== cardId) };
        }
        if (column.id === newColumnId) {
          return { ...column, cards: [...column.cards, { ...movedCard, columnId: newColumnId }] };
        }
        return column;
      })
    );

    moveCard({ cardId, columnId: newColumnId });
  };

  return (
    <section className={styles.kanbanBoard}>
      <h1>Open Hospital</h1>
      <div className={styles.boardsContainer}>
        <DragDropProvider onDragEnd={handleDragEnd}>
          {columns.map((column) => (
            <ColumnComponent
              key={column.id}
              column={column}
              onAddCard={handleAddCard}
              onEditCard={handleEditCard}
            />
          ))}
        </DragDropProvider>
      </div>

      {/* Modal — Create Card */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Add New Card"
      >
        <CardForm isPending={isCreating} handleSubmit={createCard} />
      </Modal>

      {/* Modal — Edit Card */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Card"
      >
        <CardForm
          isPending={isUpdating}
          initialValues={{
            title: selectedCard?.title || "",
            description: selectedCard?.description || "",
          }}
          handleSubmit={updateCard}
        />
      </Modal>
    </section>
  );
}