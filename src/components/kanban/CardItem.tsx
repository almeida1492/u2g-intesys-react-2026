import { useDraggable } from "@dnd-kit/core";
import type { Card } from "../../api";
import styles from "../../pages/kanbanBoard/kanbanboard.module.css";

export function CardItem({ card }: { card: Card }) {
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: String(card.id),
  });
  return (
    <div
      className={styles.card}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <p>Assigned to: {card.assignedTo?.name}</p>
    </div>
  );
}